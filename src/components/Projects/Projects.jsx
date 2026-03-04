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

// export default function Projects({ projects }) {
//   return (
//     <section id="projects" className="fade-in section">
//       <h2>Projects</h2>

//       <div style={gridStyle}>
//         {projects.map((project, index) => (
//           <div key={index} style={cardStyle}>
//             <h3>{project.title}</h3>

//             <p style={{ marginBottom: "15px" }}>{project.description}</p>

//             <p style={{ fontSize: "0.9rem", marginBottom: "15px" }}>
//               <strong>Technologies:</strong> {project.technologies.join(", ")}
//             </p>

//             <a href={project.link} target="_blank">
//               View on GitHub →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "20px",
// };

// const cardStyle = {
//   backgroundColor: "white",
//   padding: "22px",
//   borderRadius: "14px",
//   boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
//   transition: "all 0.3s ease",
// };
