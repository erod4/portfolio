import React from "react";
import { Link } from "react-router-dom";
import "../header/Heading.css";
const Heading = () => {
  return (
    <header className="Header" id="header">
      <a className="link" href="#about">
        About
      </a>
      <a className="link" href="#education">
        Education
      </a>
      <a className="link" href="#projects">
        Projects
      </a>
      <a className="link" href="#skills">
        Skills
      </a>
    </header>
  );
};

export default Heading;
