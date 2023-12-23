import React from "react";
import "../backToTheTop/BTTT.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
const BTTT = () => {
  return (
    <div className="BTTT">
      <a className="BTTT-Button" href="#header">
        <FontAwesomeIcon icon={faRocket} color="#fff" className="Icon" />
        <p className="Button-Text">Back To The Top</p>
      </a>
    </div>
  );
};

export default BTTT;
