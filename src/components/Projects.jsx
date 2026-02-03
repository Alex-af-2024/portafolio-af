export default function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={cardStyle}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>

          <a href={project.link} target="_blank">
            View on GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  margin: "10px",
  borderRadius: "10px",
};
