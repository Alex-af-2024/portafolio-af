export default function About({ about }) {
  return (
    <section style={sectionStyle}>
      <h2>{about.title}</h2>

      <p style={textStyle}>{about.description}</p>
    </section>
  );
}
const sectionStyle = {
  margin: "40px",
};

const textStyle = {
  lineHeight: "1.6",
  maxWidth: "800px",
};
