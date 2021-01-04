import React from "react";
import "./education.css";

export function Education() {
  return (
    <div className="box">
      <h2> Education </h2>
      <hr />

      <div className = "edu-section">
        <h3 className="edu"> College Of Engineering, Tiruvananthapuram </h3>
        <div>
          Btech, Computer Science and Engineering ( <b>8.55 CGPA</b> ){" "}
        </div>
      </div>

      <div>
        <h3 className="edu"> Hill Blooms School, Mananthavady</h3>
        <div>
          Physics, Mathematics and Computer Sceience ( <b>95.4%</b> ){" "}
        </div>
      </div>
    </div>
  );
}
