export default function Experience({ experience }) {
  return (
    <section id="experience" className="fade-in section">
      <h2>{experience.title}</h2>

      <div className="timeline">
        {experience.items.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.role}</h3>
            <span className="company">
              {item.company} · {item.period}
            </span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
