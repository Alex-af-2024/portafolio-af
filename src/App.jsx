import { useState } from "react";
import { languages } from "./i18n";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import QaApproach from "./components/QaApproach";

export default function App() {
  const [lang, setLang] = useState("en");
  const content = languages[lang];

  return (
    <>
      {/* Selector de idioma y posición de botones */}
      <div style={{ position: "fixed", top: 10, right: 10 }}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
      </div>

      <Hero content={content} />
      <About about={content.about} />
      <Skills skills={content.skills} />
      <QaApproach qaApproach={content.qaApproach} />
      <Projects projects={content.projects} />
    </>
  );
}
