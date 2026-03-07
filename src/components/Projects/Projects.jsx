import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="fade-in section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <p className="project-tech">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
