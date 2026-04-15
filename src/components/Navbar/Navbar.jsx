import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ setLang, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Alejandro Franco</div>

      {/* Hamburger button */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
      </button>

      {/* Nav links + controls (desktop & mobile) */}
      <div className={`nav-right ${menuOpen ? "nav-open" : ""}`}>
        <div className="nav-links" onClick={handleNavClick}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>

        <div className="controls">
          <button onClick={() => { setLang("en"); handleNavClick(); }}>EN</button>
          <button onClick={() => { setLang("es"); handleNavClick(); }}>ES</button>
          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
