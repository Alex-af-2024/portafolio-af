export default function Hero({ content }) {
  return (
    <section id="hero" className="fade-in section" style={heroContainer}>
      <h1 style={nameStyle}>{content.name}</h1>

      <h2 style={headlineStyle}>{content.headline}</h2>

      <p style={descriptionStyle}>{content.heroText}</p>
    </section>
  );
}

const heroContainer = {
  padding: "80px 0 60px 0",
};

const nameStyle = {
  fontSize: "3rem",
  fontWeight: "700",
  marginBottom: "10px",
  letterSpacing: "-1px",
};

const headlineStyle = {
  fontSize: "1.25rem",
  fontWeight: "500",
  color: "#6b7280",
  marginBottom: "25px",
};

const descriptionStyle = {
  maxWidth: "620px",
  fontSize: "1.05rem",
  lineHeight: "1.9",
  color: "#374151",
};
