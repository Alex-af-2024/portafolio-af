import "./Navbar.css";

export default function Navbar({ setLang, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Alejandro Franco</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </div>

      <div className="controls">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
