import "./QaApproach.css";

export default function QaApproach({ qaApproach }) {
  return (
    <section id="qa" className="fade-in section qa-section">
      <h2>{qaApproach.title}</h2>

      <p className="qa-text">{qaApproach.description}</p>
    </section>
  );
}

// import "./QaApproach.css";

// export default function QaApproach({ qaApproach }) {
//   return (
//     <section id="qa" className="fade-in section" style={sectionStyle}>
//       <h2>{qaApproach.title}</h2>

//       <p style={textStyle}>{qaApproach.description}</p>
//     </section>
//   );
// }

// const sectionStyle = {
//   margin: "40px",
// };

// const textStyle = {
//   lineHeight: "1.6",
//   maxWidth: "800px",
// };
