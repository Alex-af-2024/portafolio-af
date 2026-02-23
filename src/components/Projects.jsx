export default function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>

      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <h3>{project.title}</h3>

            <p style={{ marginBottom: "15px" }}>{project.description}</p>

            <p style={{ fontSize: "0.9rem", marginBottom: "15px" }}>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>

            <a href={project.link} target="_blank">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};
