import React from "react";
import { faDownload, faFile, faSmile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Anchors = () => {
  return (
    <div className="linksTo">
      <Link className="linkTo" to={"https://www.linkedin.com/in/erod4/"}>
        <FontAwesomeIcon icon={faLinkedin} />
        <div>LinkedIn</div>
      </Link>
      <Link
        className="linkTo"
        to={
          "https://docs.google.com/document/d/1pd-GFsLQRycDLVf9FIh_5cW9q15Ddj-P/edit?usp=sharing&ouid=108664648045076354436&rtpof=true&sd=true"
        }
      >
        <FontAwesomeIcon icon={faDownload} />

        <div>Download CV</div>
      </Link>
      <Link className="linkTo" to={"https://github.com/erod4"}>
        <FontAwesomeIcon icon={faGithub} />
        <div>Github</div>
      </Link>
    </div>
  );
};

export default Anchors;
