# 📖Mi portafolio - Alejandro Franco Acosta

## 🚀Objetivo de Proyecto

- Todo parte desde un pensamiento, plan y ejecución.
- El fin es mostrar mis conocimiento mediante un proyecto que maneje tecnologías de vanguardia en una presentación como profesional tecnológico.
- La app web se debe visualizar de una forma extremandamente rápida y en cualquier dispositivo.

## ⚙️Pasos Iniciales de Creación

- Requisitos: node LTS o desde v18.x.x.
- Crear directorio de proyecto
- cd dir> npm vite@latest portafolio-af (para usar herramienta de construcción vite que usa empaquetador (bundler) EsBuild)
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

---

22-01-2026
Estructura de proyecto
Paso 1.5 ok -> Entender estructura básica

---

23-01-2026 22:13 horas
Paso 1.6 ok -> Crear estructura profesional de proyecto

---

24-01-2026
Paso 1.7 ok -> Sistema de prioridades selectivas [Dev, Qa, Ti]
Paso 1.8 ok -> Archivos con contenido según idioma (objetos con datos)
Paso 1.9 ok -> Creación de sistema de idiomas(facilita interacción y cambia idioma de forma dinámica).

> [!IMPORTANT]
> i18n/index.js tiene import de profile.en y profile.es (y una constante que facilita su invocación)

Paso 1.10 ok -> Creación de componente (estructura visual que invoca data mediante content).

---

Conectar Todo en App.jsx
Paso 2.1 ok -> Edición de src/App.jsx
Paso 2.2 ko -> npm run dev para probar visualización de componente con datos. Ojo con CSS que aveces puede traer conflictos con configuración por default
--
Hasta aquí tengo:

- Botones EN / ES arriba (con lógica creada en i18n/index.js)
  React funcionando
  Sistema bilingüe
  Arquitectura profesional

Primera sección lista

---

02-02-2026 Próximo paso

En el siguiente paso vamos a:

- Crear la sección Projects con tarjetas profesionales
- Crear Skills ordenadas por prioridad (Dev → QA → IT)
- Agregar un diseño moderno base (colores + tipografía)

- Agregar src/Projects.jsx (para crear otros componentes)

* Project.jsx es la estructura "visual"
* Project.jsx toma como datos data/profile(en o es) mediante estructura de objetos
  > [!iMPORTANT]
  > Projects.jsx>projects.map() recorre todos los projects que se encuentran en data/profile(en/es) activo
  > En App.jsx importamos el ./componentes/Projects y lo llamamos como etiqueta en sentencia 20

Hoy logré:
✔ Render dinámico de proyectos
✔ Sistema bilingüe funcionando
✔ Arquitectura tipo CV editable
✔ Portfolio escalable
✔ Base profesional para reclutadores

---

03-02-2026

- Se agrega un poco de estilo para conocer estructura enlace entre index.css

---

16-02-2026

- Se agrega Skills como data en cada profile.
- Se crea /components/Skills.jsx para dar estructura a este componente UI
- Se conecta Skills.jsx con App.jsx
- Se usa el sistema de prioridad de forma profesional para mayor escalabilidad y alteración flexible.

---

23-02-2026

Agregar "About me" y "Qa Approach"

- Se agregan componentes para fortalecer estructura de página.

---

24-02-2026

- Se mejora UI/UX de página.
- Se agrega NavBar con links.
- Se agrega cards a Skills y Projects con efectos.

---

03-03-2026

Agregar Experience, Footer y mejorar estilo sobrio.
Nota: pendiente separar contenido de presentación de .jsx a css

---

04-03-2026

Ordenar styles de /components/x.jsx a estructura de carpetas ordenadas. Ok

05-03-2026

Se refuerza contenido

07-03-2026

Se termina contenido general de proyecto

---

07-03-2026

## Revisar proyecto con React Doctor para detectar anti patrones -> $ npx -y react-doctor

Según consejo encontrado, se debe colocar en id en los elementos que son recorridos con map. Ejemplo: projects, skills, experience. Revisar /components/

- Regla simple:
  .map() de objetos si nececita id
  .map() de strings no nececita id (usar el string)
  Elemento único no.

---

09-03-2026

-> Agregar ícono con Dark Mode ok
-> Agregar datos de contacto -- Se dejará de momento sin datos de contacto.

---

-> Subir proyecto a FireBase

Usaré Firebase hosting porque

- Es rápido (CDN global)
- Tiene HTTPS automático
- Es gratis para mi proyecto por ser ligero
- Puedo actualizar facilmente el sitio

Consideraciones:

- Compilar proyecto para que Firebase pueda leer proyecto en su "lenguaje".
  ->npm run build /_creará una carpeta dist/ donde estará mi sitio para producción y firebase lo publicará_/

- Instalar Firebase CLI (Solo una vez en mi PC)

  > npm install -g firebase-tools
  > Se instalarán muchos paquetes

- Login
  firebase login
  preguntará si quiero integrar IA Gemina. No lo necesito para este proyecto "n"
  preguntará si quiero enviar reportes "n"
  logear con cuenta de google en navegador que se abre automáticamente. Mensaje Woohoo!
  ... en consola saldrá + Success! Logged in as afranco.afa@gmail.com

- Inicializar Firebase

  > firebase init
  > yes para confirmar
  > escoger opcion hosting flecha + espacio(marcar opción) + enter
  > Create a new proyect en firebase
  > colocar nombre de ese portafolio (borrar sugerencia si quiero agregar algo distintivo)
  > colocar nombre de portafolio, que sea profesional

  Ahora viene la pregunta más importante
  what do you want to use your public directory?

  > dist /_porque proyecto React con Vite genera el build ahí_/
  > luego responer si quiero que se configura como SPA
  > y /_quiere decir si debe redirigir todas las rutas a /index.html y es importante porque cuando se navega por /about /projects /skills no existen como archivos físicos, todo lo maneja React desde index.html _/

  para ? Set up automatic builds and deploys with GitHub? (Y/n)
  tenemos dos opciones, pongo y porque al hacer git push se acttiva build automático y deploy en Firebase

para ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
poner usuario/nombre-repositorio

Desde el punto de logeo con github, me salió error pero no es por el proyecto. Así que modificaré más adelante el deploy con GitHub desde consola de Firebase

Por ahora retornemos con

firebase init
hacemos lo mismo hasta llegar a github y poner n
si pregunta por sobreescribir el dist/index.html, poner no para que no se borre el que ya creé.

- Una vez terminado inicializamos firebase

> npm run build
> firebase deploy
> Si todo sale bien verás algo como:
> Hosting URL: https://portafolio-af-dev.web.app

Mi link es https://portafolio-af-dev.web.app
---

10-03-2026
Implementar title para Projects para que sea independiente en de es