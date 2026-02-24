import { profilePriority } from "../data/config";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="fade-in section">
      <h2>Skills</h2>

      <div style={gridStyle}>
        {profilePriority.map((area) => (
          <div key={area} style={cardStyle}>
            <h3
              style={{
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#1a73e8",
                marginBottom: "15px",
              }}
            >
              {area}
            </h3>

            <ul style={listStyle}>
              {skills[area].map((skill, index) => (
                <li key={index} style={listItemStyle}>
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "22px",
  borderRadius: "14px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  transition: "all 0.3s ease",
};

const areaTitle = {
  marginBottom: "15px",
};

const listStyle = {
  paddingLeft: "20px",
};

const listItemStyle = {
  marginBottom: "8px",
};
