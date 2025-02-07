import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Web portfolio",
    description: "Visual Studio - React - GitHub Copilot",
    github: "https://github.com/4leX-42/my-portfolio",
  },
  {
    title: "Programming C | P2P | GIT BASH",
    description: "42-Madrid.Piscine-C-Shell",
    github: "https://github.com/4leX-42/Projects-in-C",
  },
  {
    title: "Discovery Web 42 Madrid",
    description: "HTML - CSS - JavaScript - Shell",
    github: "https://github.com/4leX-42/Discovery-Web-42",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="Tilprojects">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;