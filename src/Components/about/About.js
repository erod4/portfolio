import React from "react";
import TitleOne from "../main/TitleOne";
import Title from "../Title";
import Bio from "./Bio";
import "../about/About.css";

const About = () => {
  return (
    <div className="About" id="about">
      <Title text={"About"} className="title" />
      <div className="Bio-Img-Container ">
        <img
          alt="img of me"
          className="Bio-Img"
          src="https://res.cloudinary.com/dlhqcd4rs/image/upload/v1703303415/IMG_5326_gi03jk.jpg"
        />
      </div>
      <Bio />
    </div>
  );
};

export default About;
