export default function About({ about }) {
  return (
    <section id="about" className="fade-in section">
      <h2>{about.title}</h2>

      <p className="section-text">{about.description}</p>
    </section>
  );
}
