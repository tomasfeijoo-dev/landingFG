# Landing Fundación Gedyt

Landing institucional de [Fundación Gedyt](https://fundaciongedyt.org.ar), hecha con Next.js y Tailwind CSS y pensada para publicarse en Vercel.

## Desarrollo

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editar contenido

Los textos, cifras, datos de contacto y links están en `lib/content.ts`.
Falta definir el link real de donaciones (`donateUrl`).

## Formulario de contacto

El formulario envía los mensajes por email con [Resend](https://resend.com).
Configurá estas variables en Vercel (Settings → Environment Variables), como figura en `.env.example`:

- `RESEND_API_KEY`: API key de Resend
- `CONTACT_TO`: casilla que recibe los mensajes
- `CONTACT_FROM`: remitente verificado en Resend
