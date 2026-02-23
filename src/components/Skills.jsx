import { profilePriority } from "../data/config";

export default function Skills({ skills }) {
  return (
    <section>
      <h2>Skills</h2>

      <div style={gridStyle}>
        {profilePriority.map((area) => (
          <div key={area} style={cardStyle}>
            <h3 style={areaTitle}>{area.toUpperCase()}</h3>

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
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
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
