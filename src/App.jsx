// function App() {
//   return (
//     <div>
//       <h1>Hola, este es mi portfolio</h1>
//       <p>React + Vite funcionando correctamente 🚀</p>
//     </div>
//   );
// }

import { useState } from "react";
import { languages } from "./i18n";

import Hero from "./components/Hero";

export default function App() {
  const [lang, setLang] = useState("en");
  const content = languages[lang];

  return (
    <>
      {/* Selector de idioma */}
      <div style={{ position: "fixed", top: 10, right: 10 }}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
      </div>

      <Hero content={content} />
    </>
  );
}
// export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
