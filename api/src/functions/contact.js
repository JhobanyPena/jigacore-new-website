const { app } = require("@azure/functions");
const { ClientSecretCredential } = require("@azure/identity");

// Cache the credential across invocations (warm instances)
let cachedCredential;
function getCredential() {
    if (!cachedCredential) {
        cachedCredential = new ClientSecretCredential(
            process.env.GRAPH_TENANT_ID,
            process.env.GRAPH_CLIENT_ID,
            process.env.GRAPH_CLIENT_SECRET
        );
    }
    return cachedCredential;
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isValidEmail(value) {
    return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildRows(fields) {
    return fields
        .filter(([, v]) => v)
        .map(
            ([label, v]) =>
                `<tr><td style="padding:6px 12px;font-weight:600;color:#111;white-space:nowrap;vertical-align:top">${escapeHtml(
                    label
                )}</td><td style="padding:6px 12px;color:#333">${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`
        )
        .join("");
}

app.http("contact", {
    methods: ["POST"],
    authLevel: "anonymous",
    handler: async (request, context) => {
        let body;
        try {
            body = await request.json();
        } catch {
            return { status: 400, jsonBody: { ok: false, error: "invalid_json" } };
        }

        // Honeypot: bots fill hidden field -> pretend success, do nothing.
        if (body.company_website) {
            return { status: 200, jsonBody: { ok: true } };
        }

        const name = (body.name || "").toString().trim();
        const email = (body.email || "").toString().trim();
        const message = (body.message || "").toString().trim();

        if (!name || !message || !isValidEmail(email)) {
            return { status: 400, jsonBody: { ok: false, error: "missing_fields" } };
        }

        const sender = process.env.GRAPH_SENDER;
        const recipient = process.env.CONTACT_RECIPIENT;
        if (!sender || !recipient || !process.env.GRAPH_TENANT_ID || !process.env.GRAPH_CLIENT_ID || !process.env.GRAPH_CLIENT_SECRET) {
            context.error("Missing Graph configuration in application settings.");
            return { status: 500, jsonBody: { ok: false, error: "server_not_configured" } };
        }

        const rows = buildRows([
            ["Nombre", name],
            ["Correo", email],
            ["Teléfono", body.phone],
            ["Empresa / Organización", body.company],
            ["¿Cómo podemos ayudarte?", body.help],
            ["Mensaje", message],
            ["Origen", body.source],
        ]);

        const htmlBody = `
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
                <h2 style="margin:0 0 12px">Nuevo mensaje del formulario web</h2>
                <table style="border-collapse:collapse;border:1px solid #eee">${rows}</table>
                <br/><br/>
            </div>`;

        const graphMessage = {
            message: {
                subject: `Nuevo contacto web: ${name}`,
                body: { contentType: "HTML", content: htmlBody },
                toRecipients: [{ emailAddress: { address: recipient } }],
                replyTo: [{ emailAddress: { address: email, name } }],
            },
            saveToSentItems: true,
        };

        try {
            const token = await getCredential().getToken("https://graph.microsoft.com/.default");
            const res = await fetch(
                `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(graphMessage),
                }
            );

            if (!res.ok) {
                const detail = await res.text();
                context.error(`Graph sendMail failed (${res.status}): ${detail}`);
                return { status: 502, jsonBody: { ok: false, error: "send_failed" } };
            }

            return { status: 200, jsonBody: { ok: true } };
        } catch (err) {
            context.error("Unexpected error sending mail", err);
            return { status: 500, jsonBody: { ok: false, error: "unexpected" } };
        }
    },
});
