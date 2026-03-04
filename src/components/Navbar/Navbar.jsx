import "./Navbar.css";

export default function Navbar({ setLang }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Alejandro Franco</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#qa">QA</a>
        <a href="#projects">Projects</a>
      </div>

      <div className="language-switch">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
      </div>
    </nav>
  );
}

// export default function Navbar({ setLang }) {
//   return (
//     <nav className="navbar">
//       <div className="logo">Alejandro Franco</div>

//       <div className="nav-links">
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#qa">QA</a>
//         <a href="#projects">Projects</a>
//       </div>

//       <div>
//         <button onClick={() => setLang("en")}>EN</button>
//         <button onClick={() => setLang("es")}>ES</button>
//       </div>
//     </nav>
//   );
// }

// const navStyle = {
//   position: "fixed",
//   top: 0,
//   width: "100%",
//   backgroundColor: "rgba(255,255,255,0.85)",
//   backdropFilter: "blur(8px)",
//   padding: "15px 30px",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   borderBottom: "1px solid #eee",
//   zIndex: 1000,
// };

// const logoStyle = {
//   fontWeight: "bold",
// };
