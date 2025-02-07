import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Copyrai from "./components/Copyrai";
import "./styles/globals.css";

function App() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Copyrai />
    </div>
  );
}

export default App;