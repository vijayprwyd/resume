import React from "react";
import { Profile } from "./Profile/Profile";
import "./App.css";
import { AboutMe } from "./AboutMe/AboutMe";
import { Skills } from "./Skills/Skills";
import { WorkExperience } from "./WorkExperience/WorkExperience";
import { Education } from "./Education/Education";
import Certifications from "./Certifications/Certifications";
import { BlogsAndRepos } from "./BlogsAndRepos/BlogsAndRepos";

function App() {
  return (
    <div className="App">
      <Profile
        name="Vijay P R"
        designation="Senior Software Engineer"
        email="vijayprwyd@gmail.com"
        phone="+91-7022356026"
        location="Bengaluru"
      />

      <AboutMe>
        Full stack software engineer working primarily on UI with 4+ years of
        experience in developing enterprise products.Experienced in developing
        high performant, responsive, accessible, scalable and secure single page web applications
        from scratch, refactoring legacy codebases to latest React stack
        applying modern design patterns. Strong background in Mathematics and Algorithms.
      </AboutMe>

      <Skills
        skills={[
          "Javascript",
          "React",
          "NodeJS",
          "Express",
          "HTML",
          "CSS",
          "Typescript",
          "Webpack",
          "Apollo Client",
          "Redux",
          "Responsive Design",
          "Data Structures",
          "Design Patterns",
          "Java",
          "Git",
          "Jira",
          "MySQL",
          "MongoDB",
          "Splunk",
          "Amplitude"
        ]}
      />

      <WorkExperience />

      <Certifications/>

      <BlogsAndRepos/>

      <Education />
    </div>
  );
}

export default App;
