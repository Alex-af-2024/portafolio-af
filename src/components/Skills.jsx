import { profilePriority } from "../data/config";

export default function Skills({ skills }) {
  return (
    <section>
      <h2>Skills</h2>

      {profilePriority.map((area) => (
        <div key={area} style={boxStyle}>
          <h3>{area.toUpperCase()}</h3>

          <ul>
            {skills[area].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

const boxStyle = {
  border: "1px solid #ddd",
  margin: "15px",
  padding: "15px",
  borderRadius: "10px",
};
