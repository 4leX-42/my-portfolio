import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "C", icon: "https://cdn.iconscout.com/icon/free/png-256/free-c-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175191.png" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "React", icon: "https://github.com/facebook/react/wiki/react-logo-1000-transparent.png" },
    { name: "Linux", icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png" },
    { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "Bash", icon: "https://img.icons8.com/color/600/bash.png" },
    { name: "HTML", icon: "https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/Other-html-5-icon.png" },
    { name: "CSS", icon: "https://icons.veryicon.com/png/o/application/skills-section/css3-5.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/fluent/512/javascript.png" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-circle">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;