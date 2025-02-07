import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={process.env.PUBLIC_URL + "/Hacker.gif"} alt="Background animation" className="hero-video" aria-hidden="true" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="glitch-container">
          <img src={process.env.PUBLIC_URL + "/Logo-personal.jpg"} alt="4LEX-42" className="glitch-image" />
        </div>
        <p className="hero-subtitle">Self-taught programmer</p>
        <div className="hero-buttons">
          <a 
            href="https://github.com/4leX-42" 
            className="hero-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            𝔾𝕚𝕥ℍ𝕦𝕓
          </a>
          <a 
            href="https://4lex-42.github.io/C.V/" 
            className="hero-button secondary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            ℂ𝕍
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;