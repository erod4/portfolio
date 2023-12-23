import React from "react";

const Project = ({ title, imgURL, text, url }) => {
  return (
    <a className="Project" href={url} target="blank">
      <h1 className="Project-Title">{title}</h1>
      <img alt="img" className="Project-Img" src={imgURL} />
      <p className="Project-Text">{text}</p>
    </a>
  );
};

export default Project;
