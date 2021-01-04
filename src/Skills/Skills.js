import React from "react";
import "./skills.css";

export function Skills({skills}) {

  return (
    <div className="box">
      <h2> Skills </h2>
      <hr />

      <div className="skill-section">
        {skills.map((skill) => (
          <div className="skill-desc"> {skill} </div>
        ))}
      </div>
    </div>
  );
}
