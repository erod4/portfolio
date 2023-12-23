import React from "react";
import "../edu/Edu.css";
import Title from "../Title";
import Institute from "./Institute";

const Edu = () => {
  return (
    <div className="Education" id="education">
      <Title text={"Education"} className={"title"} />
      <Institute
        school={"San Diego State University"}
        major={"Computer Engineering (B.S)"}
        projected={"2025"}
      />
    </div>
  );
};

export default Edu;
