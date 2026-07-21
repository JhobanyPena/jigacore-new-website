This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ejecutar el proyecto localmente

Requisitos: Node.js 18.17 o superior.

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Puedes empezar a editar la página modificando `src/app/page.js`; los cambios se recargan automáticamente.

## Despliegue en Azure Static Web Apps

El proyecto está configurado como **exportación estática** de Next.js (`output: "export"` en `next.config.mjs`). El build genera el sitio en la carpeta `out/`, que es lo que se sube a Azure Static Web Apps con la [SWA CLI](https://azure.github.io/static-web-apps-cli/) usando el **deployment token**.

### Requisitos previos

- Node.js 18.17+ y dependencias instaladas (`npm install`).
- SWA CLI instalada: `npm install -g @azure/static-web-apps-cli`.
- El **deployment token** de tu Static Web App (portal de Azure → tu Static Web App → _Manage deployment token_).

> ⚠️ Trata el deployment token como un secreto. No lo escribas directamente en comandos que queden en el historial ni lo subas al repositorio. Si se expone, regenéralo con _Reset_ en _Manage deployment token_.

### Pasos

1. Genera la versión estática:

   ```bash
   npm run build
   ```

   Esto crea la carpeta `out/` (incluye `staticwebapp.config.json` copiado desde `public/`).

2. Despliega el contenido de `out/` junto con la API (`api/`):

   ```bash
   swa deploy ./out --api-location api --api-version 20 --deployment-token <TU_TOKEN> --env <ENTORNO>
   ```

   Para no exponer el token en el historial, defínelo como variable de entorno y omite el flag:

   ```bash
   # PowerShell
   $env:SWA_CLI_DEPLOYMENT_TOKEN = "<TU_TOKEN>"
   swa deploy ./out --api-location api --api-version 20 --env <ENTORNO>
   ```

### Entornos

- `--env production` → publica en el entorno de **producción**.
- `--env development` (o cualquier otro nombre: `test`, `staging`, `qa`) → crea/actualiza un **entorno preview con nombre**, con su propia URL, sin afectar producción. Reutilizar el mismo nombre actualiza ese mismo entorno.

> Los entornos preview con nombre requieren el plan **Standard** de Static Web Apps.

### Resumen rápido

```bash
# 1. Construir
npm run build

# 2a. Probar en un entorno de preview
swa deploy ./out --api-location api --api-version 20 --deployment-token <TU_TOKEN> --env development

# 2b. Publicar en producción
swa deploy ./out --api-location api --api-version 20 --deployment-token <TU_TOKEN> --env production
```

## Formulario de contacto (API)

Los formularios de la página de inicio y de _Contáctenos_ envían los datos a una **Azure Function administrada** por la Static Web App (`api/contact`), que reenvía el mensaje por correo usando **Microsoft Graph** (`sendMail`) con autenticación **OAuth client credentials** (sin contraseñas ni SMTP básico).

### Configuración de la App Registration en Entra ID

La Function autentica contra Microsoft Graph mediante una aplicación registrada en Microsoft Entra ID llamada **`jigacore-web-contact-form`**. Pasos para crearla/configurarla (requiere rol de administrador):

1. **Registrar la app**: [portal.azure.com](https://portal.azure.com) → **Microsoft Entra ID** → **App registrations** → **New registration**.
   - **Name**: `jigacore-web-contact-form`
   - **Supported account types**: _Accounts in this organizational directory only (Single tenant)_
   - **Redirect URI**: vacío (se usa el flujo _client credentials_, sin login de usuario)
   - En **Overview** copia el **Application (client) ID** (`GRAPH_CLIENT_ID`) y el **Directory (tenant) ID** (`GRAPH_TENANT_ID`).
2. **Permiso de Graph**: **API permissions** → **Add a permission** → **Microsoft Graph** → **Application permissions** → marca **`Mail.Send`** → **Add permissions** → **Grant admin consent** (debe quedar el check verde).
3. **Client secret**: **Certificates & secrets** → **New client secret** → define descripción y expiración → copia el **Value** de inmediato (`GRAPH_CLIENT_SECRET`, solo se muestra una vez).
4. **Restringir buzones (recomendado)**: crea un grupo de seguridad con correo (ej. `sg-contact-form-senders@jigacore.com`) con los buzones remitentes permitidos y aplica una _Application Access Policy_ en Exchange Online:

   ```powershell
   Install-Module ExchangeOnlineManagement -Scope CurrentUser
   Connect-ExchangeOnline
   New-ApplicationAccessPolicy -AppId <GRAPH_CLIENT_ID> `
     -PolicyScopeGroupId sg-contact-form-senders@jigacore.com `
     -AccessRight RestrictAccess `
     -Description "Formulario web: solo puede enviar como estos buzones"
   Test-ApplicationAccessPolicy -AppId <GRAPH_CLIENT_ID> -Identity contactenos@jigacore.com
   ```

5. El buzón definido en `GRAPH_SENDER` debe ser un buzón real con licencia de Exchange Online.

### Environment variables requeridas (en la Static Web App)

En el portal: tu Static Web App → **Settings** → **Environment variables** (antes _Configuration → Application settings_). Nunca en el repositorio.

| Variable | Descripción |
| --- | --- |
| `GRAPH_TENANT_ID` | Directory (tenant) ID de la app registrada en Entra ID |
| `GRAPH_CLIENT_ID` | Application (client) ID |
| `GRAPH_CLIENT_SECRET` | Client secret de la app |
| `GRAPH_SENDER` | Buzón remitente (ej. `contactenos@jigacore.com`) |
| `CONTACT_RECIPIENT` | Buzón que recibe los mensajes |

La app de Entra ID necesita el permiso de aplicación **`Mail.Send`** de Microsoft Graph con consentimiento de administrador. Se recomienda restringir los buzones con una _Application Access Policy_ en Exchange Online.

### Pruebas locales de la API

Como `api/local.settings.json` **no se sube al repositorio** (contiene secretos), cada desarrollador debe crearlo a partir de la plantilla incluida `api/local.settings.json.example`.

1. Instala las dependencias de la API:

   ```bash
   cd api
   npm install
   cd ..
   ```

2. Crea tu `local.settings.json` a partir del ejemplo y rellena los valores:

   ```bash
   # PowerShell
   Copy-Item api/local.settings.json.example api/local.settings.json
   ```

   | Clave | De dónde sale |
   | --- | --- |
   | `GRAPH_TENANT_ID` | Entra ID → app `jigacore-web-contact-form` → Directory (tenant) ID |
   | `GRAPH_CLIENT_ID` | Entra ID → app → Application (client) ID |
   | `GRAPH_CLIENT_SECRET` | Entra ID → app → Certificates & secrets |
   | `GRAPH_SENDER` | Buzón remitente con licencia (ej. `contactenos@jigacore.com`) |
   | `CONTACT_RECIPIENT` | Buzón que recibe los mensajes |

3. Arranca el emulador. **Importante**: el host de Azure Functions requiere **Node 18/20/22** (no funciona con Node 24+). Si tu Node por defecto es más nuevo, usa una versión compatible solo para esta terminal.

   Opción A — sitio estático ya construido:

   ```bash
   npm run build
   swa start out --api-location api
   ```

   Opción B — desarrollo con hot reload (dos terminales):

   ```bash
   # Terminal 1: frontend con recarga en caliente
   npm run dev

   # Terminal 2: emulador SWA + API (proxy al dev server)
   swa start http://localhost:3000 --api-location api
   ```

   Abre **http://localhost:4280** (no el 3000: en el 3000 no existe `/api`).

> El archivo `api/local.settings.json` contiene secretos y está en `.gitignore`. No lo subas al repositorio; usa siempre `local.settings.json.example` como referencia.
