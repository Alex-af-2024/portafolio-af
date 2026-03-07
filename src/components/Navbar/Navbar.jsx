import "./Navbar.css";

export default function Navbar({ setLang }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Alejandro Franco</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </div>

      <div className="language-switch">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
      </div>
    </nav>
  );
}
