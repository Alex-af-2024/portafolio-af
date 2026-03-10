import "./Experience.css";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="fade-in section">
      <h2>{experience.title}</h2>

      <div className="timeline">
        {experience.items.map((item) => (
          <div key={item.id} className="timeline-item">
            <h3>{item.role}</h3>

            <span className="company">
              {item.company} · {item.period}
            </span>

            <p className="experience-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
