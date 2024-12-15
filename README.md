# 🏢 Plantilla de Sitio Web con Next.js, Express y Diseño Material

Este repositorio proporciona una base sólida para la creación de un sitio web de marketing, combinando las ventajas de Next.js (SSR, SEO, rendimiento), un servidor Express personalizado (control de seguridad, CORS, compresión), y una UI construida bajo principios de Material Design. Además, cuenta con secciones predefinidas orientadas a resaltar productos o servicios, planes de suscripción, reputación y FAQs, en un formato fácilmente personalizable.

---

## ⚡ Características Principales

- **Next.js (SSR y SEO Optimizado)**: Renderizado en el servidor para mejorar el SEO y ofrecer una carga más rápida.
- **Express Server Integrado**: Permite mayor control sobre la seguridad (helmet), rendimiento (compression) y configuración flexible (CORS, middlewares).
- **Diseño Material**: Estilo limpio y moderno basado en Material UI (MUI), con tipografías, colores y layout pensados para ofrecer una experiencia coherente.
- **Estructura de Landing Page**:
  - **Hero Section**: Presentación principal con mensajes clave y llamadas a la acción.
  - **WorkApproach Section**: Destaca el enfoque de trabajo y beneficios.
  - **Credibility Section**: Refuerza la reputación y confianza hacia la marca o el profesional.
  - **SubscriptionPlans Section**: Muestra planes y precios, con CTA para iniciar.
  - **FAQ Section**: Aborda preguntas frecuentes para reducir fricción e incertidumbre.
  - **Footer**: Incluye enlaces legales, redes sociales, CTA de contacto y logotipo.
- **Adaptabilidad de Contenido**: El contenido y las imágenes se pueden modificar para ajustarse a cualquier sector o marca.
- **Buenas Prácticas de Seguridad y Rendimiento**: Uso de Helmet, compresión GZIP, configuración CORS, y headers de seguridad.
- **SEO y Accesibilidad**: Metadatos, Open Graph, Twitter Cards, datos estructurados (JSON-LD) y `next-sitemap` para sitemaps y robots.txt.

---

## 🔎 Estructura del Proyecto

```bash
.
├── components
│   ├── common
│   │   └── Menu        # Menú de navegación principal
│   └── landing          # Secciones específicas de la landing page
│       ├── CredibilitySection
│       ├── FAQ
│       ├── Footer
│       ├── HeroSection
│       ├── SubscriptionPlansSection
│       └── WorkApproachSection
├── config.js            # Configuraciones globales (opcional)
├── next.config.js       # Configuraciones para Next.js (alias, imágenes, etc.)
├── next-sitemap.config.js # Configuración para sitemap y robots.txt
├── package.json
├── package-lock.json
├── pages
│   ├── _app.js          # Punto de entrada de la app Next.js (estilos globales, theme)
│   ├── _document.js     # Documento HTML base (meta tags, idioma, etc.)
│   └── index.js         # Página principal que integra las secciones
├── public
│   ├── logo.png
│   ├── logo.svg
│   ├── robots.txt
│   ├── sitemap-0.xml
│   └── sitemap.xml
├── server.js            # Servidor Express que integra Next.js y middlewares
├── styles
│   └── globals.css      # Estilos globales, variables, resets
└── utils
    ├── ActionButton.js
    ├── ConnectionLine.js
    ├── ContentContainer.js
    ├── GeometricFigure.js
    ├── logger.js
    ├── SectionDivider.js
    └── socialNetworksOptions.js
```

---

## 🚀 Cómo Empezar

### Instalación de Dependencias
```bash
npm install
```

### Entorno de Desarrollo
```bash
npm run dev
```
Esto iniciará el servidor en `http://localhost:3000`.

### Build y Producción
```bash
npm run build
npm start
```
Configurar las variables de entorno y `NODE_ENV=production` según necesidad.

---

## 🎨 Personalización del Contenido

- **Textos, Imágenes y Colores**: Ajustar el contenido en `pages/index.js` y en las secciones ubicadas en `components/landing/` para alinear el mensaje con la marca o el nicho.
- **Temas y Estilos**: Modificar `styles/globals.css` y emplear MUI ThemeProvider si se desea mayor control sobre la paleta de colores, tipografías y componentes.

---

## 🌎 SEO y Sitemap

- Ajustar el título, descripción y metadatos en `pages/index.js` y `_document.js`.
- `next-sitemap.config.js` genera automáticamente `sitemap.xml` y `robots.txt` en build, mejorando la indexación.

---

## 🔒 Seguridad y Rendimiento

- **Helmet**: Añade headers de seguridad recomendados.
- **Compression**: GZIP activo para reducir el tamaño de las respuestas.
- **CORS**: Control configurable de orígenes permitidos.
- **Express**: Flexibilidad total para agregar middlewares, logging con `logger.js`, y más.


## 📚 Licencia

Este proyecto se distribuye bajo la licencia MIT. Puede usarse, modificarse y adaptarse libremente para proyectos personales o comerciales.
