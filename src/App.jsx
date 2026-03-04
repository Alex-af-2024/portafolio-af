import { useState } from "react";
import { languages } from "./i18n";

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import QaApproach from "./components/QaApproach/QaApproach";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [lang, setLang] = useState("en");
  const content = languages[lang];

  return (
    <>
      <Navbar setLang={setLang} />

      <div className="container" style={{ marginTop: "100px" }}>
        <Hero content={content} />

        <About about={content.about} />

        <Skills skills={content.skills} />

        <Experience experience={content.experience} />

        <QaApproach qaApproach={content.qaApproach} />

        <Projects projects={content.projects} />

        <Footer footer={content.footer} />
      </div>
    </>
  );
}
