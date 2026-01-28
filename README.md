# 📖Mi portafolio - Alejandro Franco Acosta

## 🚀Objetivo de Proyecto

- Todo parte desde un pensamiento, plan y ejecución.
- El fin es mostrar mis conocimiento mediante un proyecto que maneje tecnologías de vanguardia en una presentación como profesional tecnológico.
- La app web se debe visualizar de una forma extremandamente rápida y en cualquier dispositivo.

## ⚙️Pasos Iniciales de Creación

- Requisitos: node LTS o desde v18.x.x.
- Crear directorio de proyecto
- cd dir> npm vite@latest portafolio-af
- Responder preguntas (fw React, lenguaje JavaScript)
- portafolio-af>npm install (este paso es cada vez que se use repositorio en otro equipo)
- Ejecutar servidor con npm run dev y ver localhost:5173

## 🏛️Datos Estructurales:

### Estructura de proyecto

📁src/
├─ components/ 'Aquí va todas las secciones visuales(Hero,About,Projects,etc.)'
├─ data/ 'Aquí vivirá todo el texto, skills,experiencia,proyectos'
| ├─ config.js 'un arreglo que permite cambiar prioridad de componentes.'
| ├─ profile.en.js 'creación de archivos de idioma'
| └─ profile.es.js
|
├─ i18n/ 'Aquí controlaré el idioma(ES/EN)'
| ├─ index.js 'Creación de sistema de idiomas. Cambia idioma dinámicamente'
|

### main.jsx:

- Punto de partida de toda la app. Casi intocable.

### App.jsx (archivo principal):

- Es el componente raíz. Todo mi portafolio vivirá aquí o debajo de aquí.
- Aquí se comienza a crear.

## 🛠️Datos de Desarrollo

### Repositorio en todos lados

    - Al usar repositorio GitHub, recordar que .gitignore bloquea algunos elementos. Por tal motivo  para trabajar en otro equipo, usar 'npm install' al descargar repositorio.

---

21-01-2026
Paso 1.1-1.4 -> Elaboración de proyecto
--
22-01-2026
Estructura de proyecto
Paso 1.5 ok -> Entender estructura básica
--
23-01-2026 22:13 horas
Paso 1.6 ok -> Crear estructura profesional de proyecto
--
24-01-2026
Paso 1.7 ok -> Sistema de prioridades selectivas [Dev, Qa, Ti]
Paso 1.8 ok -> Archivos con contenido según idioma (objetos con datos)
Paso 1.9 ok -> Creación de sistema de idiomas(facilita interacción y cambia idioma de forma dinámica).
Paso 1.10 ok -> Creación de componente (estructura visual que invoca data mediante content).

Conexión de Todo lo Creado
Paso 2.1 ok -> Edición de src/App.jsx
Paso 2.2 ko -> npm run server para probar visualización de componente con datos. Ojo con CSS que aveces puede traer conflictos con configuración por default
--

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
