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

2. Despliega el contenido de `out/`:

   ```bash
   swa deploy ./out --deployment-token <TU_TOKEN> --env <ENTORNO>
   ```

   Para no exponer el token en el historial, defínelo como variable de entorno y omite el flag:

   ```bash
   # PowerShell
   $env:SWA_CLI_DEPLOYMENT_TOKEN = "<TU_TOKEN>"
   swa deploy ./out --env <ENTORNO>
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
swa deploy ./out --deployment-token <TU_TOKEN> --env development

# 2b. Publicar en producción
swa deploy ./out --deployment-token <TU_TOKEN> --env production
```
