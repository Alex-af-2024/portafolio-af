<div align="center">

# 🚀 Alejandro Franco Acosta — Portfolio

### Software Developer · QA Tester · IT Support

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-portafolio--af--dev.web.app-0A66C2?style=for-the-badge)](https://portafolio-af-dev.web.app)
[![GitHub](https://img.shields.io/badge/GitHub-Alex--af--2024-181717?style=for-the-badge&logo=github)](https://github.com/Alex-af-2024)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Alejandro_Franco-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/alejandro-franco-acosta-dev/)

---

**Portafolio profesional bilingüe (ES/EN) construido con React 19 + Vite 7.**
Diseñado para mostrar mi perfil como desarrollador, QA tester y soporte TI
con una experiencia de usuario moderna, rápida y responsive.

</div>

---

## ✨ Características Principales

| Característica | Detalle |
|---|---|
| ⚡ **Rendimiento** | Construido con Vite 7 + React 19 — carga ultrarrápida |
| 🌐 **Bilingüe** | Sistema i18n propio — cambio dinámico entre Español e Inglés |
| 🌙 **Dark Mode** | Tema oscuro con toggle interactivo |
| 📱 **Responsive** | Diseño adaptable a cualquier dispositivo |
| 🏗️ **Arquitectura Profesional** | Componentes modulares y separación clara de datos/vista |
| 🔥 **Deploy Automático** | Hosting en Firebase con CDN global y HTTPS |

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modular-1572B6?style=flat-square&logo=css3&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint&logoColor=white)

</div>

---

## 📸 Vista Previa

<div align="center">

> 🔗 **[Ver sitio en vivo →](https://portafolio-af-dev.web.app)**

</div>

---

## 🏛️ Arquitectura del Proyecto

```
📁 src/
├── components/
│   ├── About/          # Sección "Sobre mí"
│   ├── Experience/     # Experiencia profesional
│   ├── Footer/         # Pie de página con contacto
│   ├── Hero/           # Presentación principal
│   ├── Navbar/         # Navegación + Dark Mode + i18n
│   ├── Projects/       # Tarjetas de proyectos
│   └── Skills/         # Habilidades categorizadas (Dev / QA / IT)
│
├── data/
│   ├── config.js       # Sistema de prioridades de secciones
│   ├── profile.en.js   # Contenido en inglés
│   └── profile.es.js   # Contenido en español
│
├── i18n/
│   └── index.js        # Motor de internacionalización
│
├── App.jsx             # Componente raíz
└── main.jsx            # Punto de entrada
```

### 🔑 Decisiones de Diseño

- **Datos desacoplados de la vista** — Todo el contenido vive en `data/profile.*.js`, lo que permite editar texto sin tocar componentes.
- **Sistema i18n propio** — Sin dependencias externas; cambio de idioma instantáneo mediante estado global.
- **Sistema de prioridades** — `config.js` controla el orden de renderizado de secciones (Dev → QA → IT), permitiendo adaptar la presentación al rol objetivo.
- **Componentes modulares** — Cada sección tiene su propia carpeta con estilos separados, facilitando el mantenimiento y la escalabilidad.

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/Alex-af-2024/portafolio-af.git

# Instalar dependencias
cd portafolio-af
npm install

# Iniciar servidor de desarrollo
npm run dev
# → Abrir http://localhost:5173

# Generar build de producción
npm run build
```

> **Requisitos:** Node.js v18+ (LTS recomendado)

---

## 📋 Secciones del Portafolio

### 👤 Hero
Presentación profesional con headline y resumen de perfil.

### 💡 About Me
Descripción detallada de perfil profesional, combinando experiencia técnica con trayectoria en el sector automotriz.

### 🧰 Skills
Habilidades organizadas por categoría con sistema de prioridades:
- **Development** — Backend (Node.js, Python, Java, C#), Frontend (React, JS), Bases de Datos, APIs REST/SOAP
- **QA Testing** — Scrum/Jira, Pytest, JUnit, Selenium, Postman, SoapUI
- **IT Support** — Active Directory, Microsoft 365, Windows/Linux/macOS, Acronis

### 💼 Experience
Línea temporal de experiencia profesional:
- **IT Support** @ Universidad Santo Tomás *(2025 - Presente)*
- **QA Tester** @ SMX *(2024 - 2025)*
- **Especialista en Diagnóstico Automotriz** *(2008 - 2024)*

### 🗂️ Projects
Tarjetas interactivas con descripción, tecnologías y enlaces a repositorios.

---

## 🌐 Deploy

El sitio está desplegado en **Firebase Hosting** con:
- 🔒 HTTPS automático
- ⚡ CDN global para baja latencia
- 🔄 Deploy manual con `firebase deploy`

```bash
# Deploy a producción
npm run build
firebase deploy
```

---

## 📬 Contacto

<div align="center">

| Canal | Enlace |
|---|---|
| 📧 **Email** | [afranco.afa@gmail.com](mailto:afranco.afa@gmail.com) |
| 💼 **LinkedIn** | [alejandro-franco-acosta-dev](https://www.linkedin.com/in/alejandro-franco-acosta-dev/) |
| 🐙 **GitHub** | [Alex-af-2024](https://github.com/Alex-af-2024) |
| 🌐 **Portfolio** | [portafolio-af-dev.web.app](https://portafolio-af-dev.web.app) |

</div>

---

<div align="center">

Hecho con ❤️ y ☕ por **Alejandro Franco Acosta**

*"La calidad no es un accidente, es siempre el resultado de un esfuerzo inteligente."*

</div>