export default function Navbar({ setLang }) {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Alejandro Franco</div>

      <div>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("es")}>ES</button>
      </div>
    </nav>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(8px)",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee",
  zIndex: 1000,
};

const logoStyle = {
  fontWeight: "bold",
};
