import "./Skills.css";
import { profilePriority } from "../../data/config";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="fade-in section">
      <h2>{skills.title}</h2>

      {/*Cards con contenido: card,title y ul */}
      <div className="skills-grid">
        {profilePriority.map((area) => (
          <div key={area} className="skill-card">
            <h3 className="skill-area-title">{area}</h3>

            <ul className="skill-list">
              {skills[area].map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
