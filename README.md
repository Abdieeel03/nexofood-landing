# 🍽️ NexoFood — Landing Page

> **Plataforma integral para negocios gastronómicos: Vende más, en más lugares y sin comisiones abusivas.**

Landing page oficial de **NexoFood**, una solución SaaS integral diseñada para restaurantes, dark kitchens y franquicias que buscan digitalizar sus pedidos, centralizar sus canales de delivery y fidelizar a sus clientes sin depender de comisiones abusivas de terceros.

---

## 🚀 Tecnologías

El proyecto está construido priorizando rendimiento, accesibilidad y máxima velocidad de carga:

[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.12.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-packaged-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)

* **[Astro](https://astro.build)**: Arquitectura orientada a componentes con generación estática optimizada (SSG) y renderizado de islas (*Astro Islands*).
* **[React 19](https://react.dev)**: Utilizado para islas interactivas del cliente (ej. formulario reactivo de captura de correo).
* **[Tailwind CSS v4](https://tailwindcss.com)**: Motor de estilos de última generación integrado mediante `@tailwindcss/vite`, configurado con tokens de diseño personalizados (`@theme`).
* **Google Material Symbols**: Sistema iconográfico consistente y ligero.

---

## ✨ Características y Módulos de la Plataforma

La landing page presenta y comunica los 4 pilares fundamentales de NexoFood:

1. **🛍️ Tienda Online Propia (0% Comisiones):** Canal de venta digital directo para comensales, checkout ultrarrápido y optimizado para móviles sin intermediarios.
2. **🍳 Gestor Multicanal (KDS):** Pantalla unificada de comandas en cocina que sincroniza pedidos de Rappi, PedidosYa, WhatsApp y la tienda propia en un único flujo de producción.
3. **🛵 Logística y Delivery Inteligente:** Gestión de repartidores propios o conexión con couriers bajo demanda con tracking en tiempo real vía WhatsApp.
4. **👥 Fidelización y Base de Clientes (CRM):** Captura y propiedad de los datos de comensales para campañas automatizadas de retención y sistemas de recompensas.
5. **💳 Planes Transparentes:** Niveles *Starter* ($0/mes), *Profesional* ($49/mes) y *Enterprise* diseñados para cada etapa del negocio.

---

## 📂 Estructura del Proyecto

```text
nexofood-landing/
├── public/                 # Archivos estáticos públicos (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Recursos visuales y SVGs locales
│   ├── components/         # Componentes Astro de las secciones de la landing
│   │   ├── Features.astro      # Módulos y funcionalidades de la plataforma
│   │   ├── FinalCTA.astro      # Bloque de conversión y llamada a la acción final
│   │   ├── Footer.astro        # Pie de página y enlaces institucionales
│   │   ├── Header.astro        # Barra de navegación superior fija/adaptativa
│   │   ├── Hero.astro          # Sección principal con propuesta de valor
│   │   ├── ImpactStats.astro   # Métricas y estadísticas de impacto del servicio
│   │   ├── Pricing.astro       # Tabla de precios y planes de suscripción
│   │   ├── SocialProof.astro   # Marcas asociadas y validación social
│   │   ├── Testimonials.astro  # Casos de éxito y testimonios de restauranteros
│   │   ├── react/              # Islas interactivas en React
│   │   │   └── HeroEmailForm.tsx  # Formulario interactivo con validación
│   │   └── ui/                 # Componentes base reutilizables
│   │       ├── Button.astro       # Botón con variantes primarias/secundarias
│   │       ├── Container.astro    # Contenedor centralizado con márgenes seguros
│   │       ├── Icon.astro         # Renderizador de Material Symbols
│   │       └── SectionWrapper.astro # Envoltura semántica con espaciados
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal (HTML shell, fuentes, SEO)
│   ├── pages/
│   │   └── index.astro         # Página de inicio principal
│   └── styles/
│       └── global.css          # Tokens de diseño Tailwind v4 (@theme) y estilos base
├── astro.config.mjs        # Configuración de Astro, Tailwind Vite y React
├── package.json            # Metadatos del proyecto y dependencias
├── tsconfig.json           # Configuración de TypeScript
└── README.md
```

---

## 🛠️ Requisitos Previos

* **Node.js**: Versión `>= 22.12.0`
* **Gestor de paquetes**: Recomendado **pnpm** (o npm / yarn / bun)

---

## 📦 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Abdieeel03/nexofood-landing.git
   cd nexofood-landing
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   > El servidor estará disponible en `http://localhost:4321`.

4. **Compilar para producción:**
   ```bash
   pnpm build
   ```
   > Genera la salida optimizada lista para producción en el directorio `./dist`.

5. **Previsualizar la compilación localmente:**
   ```bash
   pnpm preview
   ```

---

## 🎨 Sistema de Diseño

La landing page implementa una paleta de colores y tokens de diseño configurados en `src/styles/global.css`:

* **Color Primario (Esmeralda Gastronómico):** `--color-primary: #006c49` / `--color-primary-container: #10b981` (transmite frescura y eficiencia).
* **Color Secundario (Apetito Mandarina):** `--color-secondary-container: #fe6a34` (estimula el apetito y destaca llamadas a la acción clave).
* **Superficies y Fondos:** Tonos naturales y contrastes oscuros (`#161f1a`) pensados para lectura prolongada y estética moderna.
* **Tipografías:**
  * Primaria: `Plus Jakarta Sans` para textos, etiquetas e interfaces dinámicas.
  * Editorial: `Newsreader` para citas y elementos destacados de impacto.

---

## 📄 Licencia

Este proyecto es de uso privado / comercial para el equipo de **NexoFood**. Todos los derechos reservados.
=======
# nexofood-landing
>>>>>>> origin/dev
