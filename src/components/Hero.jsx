export default function Hero({ content }) {
  return (
    <section style={heroContainer}>
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
};

const headlineStyle = {
  fontSize: "1.3rem",
  fontWeight: "400",
  color: "#555",
  marginBottom: "20px",
};

const descriptionStyle = {
  maxWidth: "650px",
  fontSize: "1.05rem",
  lineHeight: "1.8",
  color: "#444",
};
