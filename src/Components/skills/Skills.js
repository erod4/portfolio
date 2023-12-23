import React from "react";
import "../skills/Skills.css";
import Title from "../Title";
import Skill from "./Skill";
const Skills = () => {
  return (
    <div className="Skills" id="skills">
      <Title text={"Skills"} className={"title"} />
      <div className="Skills-Container">
        <Skill skill={"C/C++"} />
        <Skill skill={"Data Struct."} />
        <Skill skill={"MIPS Assy."} />
        <Skill skill={"CSS/HTML"} />
        <Skill skill={"JavaScript"} />
        <Skill skill={"M.E.R.N"} />
        <Skill skill={"Python"} />
      </div>
    </div>
  );
};

export default Skills;
