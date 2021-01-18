import React from 'react';
import linkedin from "../assets/linkedin.png";
import stackoverflow from "../assets/stack_overflow.png";
import github from "../assets/github.png";
import hackerrank from "../assets/hackerrank.png";
import hackerearth from "../assets/hackerearth.png";


export function SocialNetworks() {
  return (
    <div classname = "box" style={{ display: "flex" }}>
      <div>
        <a href="https://www.linkedin.com/in/vijay-p-r-133147131/" className = "sn" target = "_blank" rel="noopener noreferrer" >
          <img src={linkedin} height="40" width="40" alt = "Linkedin"></img>
        </a>

        <a href="https://stackoverflow.com/users/3950280/vijay-p-r" className = "sn" target = "_blank" rel="noopener noreferrer" >
          <img src={stackoverflow}  alt = "Stackoverflow" height="40" width="40"></img>
        </a>

        <a href="https://github.com/vijayprwyd" className = "sn" target = "_blank" rel="noopener noreferrer" >
          <img src={github} height="40" width="40" alt = "Github"></img>
        </a>

        <a href="https://www.hackerearth.com/@vpr_coder" className = "sn" target = "_blank" rel="noopener noreferrer" >
          <img src={hackerearth} height="40" width="40" alt = "HackerEarth"></img>
        </a>

        <a href="https://www.hackerrank.com/vpr_wyd" className = "sn" target = "_blank" rel="noopener noreferrer" >
          <img src={hackerrank} height="40" width="40" alt = "HackerRank"></img>
        </a>

      </div>
    </div>
  );
}
