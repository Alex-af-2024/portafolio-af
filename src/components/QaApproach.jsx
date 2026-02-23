export default function QaApproach({ qaApproach }) {
  return (
    <section style={sectionStyle}>
      <h2>{qaApproach.title}</h2>

      <p style={textStyle}>{qaApproach.description}</p>
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
