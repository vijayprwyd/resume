import React from 'react';
import { Profile } from './Profile/Profile';
import './App.css';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Skills/Skills';
import { WorkExperience } from './WorkExperience/WorkExperience';
import { Education } from './Education/Education';
function App() {
  return (
    <div className="App">

      <Profile
      
          name = "Vijay P R"
          designation = "Software Developer 2"
          email = "vijaywyd94@gmail.com"
          phone = "+91-7022356026"
          location ="Bengaluru"
      
      />

    <AboutMe>

    Full stack software engineer working primarily on UI with 4+ years of
    experience in developing enterprise products.Experienced in developing high performant, responsive, accessible single page web applications from scratch and refactoring legacy codebases to latest React stack applying modern design patterns.

    </AboutMe>


    <Skills  skills = {["Javascript", "React", "NodeJS", "HTML", "CSS", "Data Structures", "Design Patterns", "Java", "Git", "Jira", "MySQL", "MongoDB", "Responsive Design", "Webpack", "Splunk", "Apollo Client"]}/>


    <WorkExperience/>

    <Education/>
    </div>
  );
}

export default App;
