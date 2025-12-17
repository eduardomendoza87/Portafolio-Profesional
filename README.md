# 🚀 Portafolio Profesional - Eduardo Mendoza

![Project Banner](public/assets/banner-placeholder.png) 
*(Nota: Sube una captura de tu proyecto a 'public/assets/' y actualiza esta ruta)*

> Una identidad digital inmersiva construida con **React 19** y **Tailwind CSS v4**. Diseñado bajo la metodología "Deep Cosmos" con enfoque en performance, accesibilidad y experiencia de usuario (UX/UI).

[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## ⚡ Características Principales

* **Arquitectura Escalable:** Estructura de carpetas modular basada en *Features* y *Layouts*.
* **Diseño Deep Cosmos:** Sistema de diseño personalizado con Glassmorphism, gradientes sutiles y tipografía *Space Grotesk*.
* **Routing Dinámico:** Navegación fluida con **React Router v7** y manejo de rutas dinámicas para casos de estudio (`/proyectos/:id`).
* **Performance First:** Optimización de imágenes y videos (WebM) servidos vía CDN (Cloudinary) para métricas Lighthouse >95.
* **Responsive Bento Grid:** Layouts adaptativos que combinan estética y funcionalidad móvil.
* **Formulario Funcional:** Integración con **EmailJS** para recepción de mensajes en tiempo real sin backend.

---

## 🛠️ Tech Stack

* **Core:** React 19 + Vite
* **Estilos:** Tailwind CSS v4 (Nueva arquitectura de motor)
* **Enrutamiento:** React Router Dom v7
* **Iconos:** Lucide React
* **Servicios:** EmailJS (Formularios), Cloudinary (Media Optimization)
* **Tipografía:** Google Fonts (Space Grotesk + Inter + JetBrains Mono)

---

## 📂 Estructura del Proyecto

```bash
src/
├── assets/             # Recursos estáticos locales
├── components/         # Bloques reutilizables (Botones, Cards, Inputs)
│   └── ui/             # Componentes atómicos de interfaz
├── data/               # Single Source of Truth (Arrays de datos)
├── layouts/            # Layouts principales (MainLayout, AuthLayout)
├── pages/              # Vistas completas (Home, Projects, Contact)
├── routes/             # Configuración de rutas (AppRoutes)
└── index.css           # Configuración de Tailwind v4 (@theme)
🚀 Instalación y Uso
1. Clonar el repositorio

Bash

git clone [https://github.com/EduardoMendoza289/portafolio-profesional.git](https://github.com/EduardoMendoza289/portafolio-profesional.git)
cd portafolio-profesional
2. Instalar dependencias

Bash

npm install
3. Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto y agrega tus credenciales de EmailJS:

Fragmento de código

VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
4. Ejecutar en desarrollo

Bash

npm run dev
5. Compilar para producción

Bash

npm run build
🎨 Decisiones de Diseño
Paleta de Colores "Deep Cosmos"
El sistema de diseño utiliza variables CSS nativas integradas en el nuevo @theme de Tailwind v4:

Base: #020617 (Slate 950)

Surface: #0F172A (Slate 900 con transparencia)

Accent: #6366F1 (Indigo 500)

Optimización de Video
Para garantizar una carga instantánea, los demos de proyectos no se alojan en el repositorio. Se utiliza una estrategia híbrida con Cloudinary para servir videos en formato .webm o .mp4 según el navegador del usuario, reduciendo el peso del bundle inicial.

📬 Contacto
Eduardo Mendoza Izquierdo - Full Stack Developer & UX/UI Designer

📧 edumendoza.dev@gmail.com

💼 LinkedIn

🐙 GitHub

<p align="center"> Hecho con 💙 y mucho código. </p>