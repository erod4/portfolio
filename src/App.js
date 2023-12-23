import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFile, faSmile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Main from "./Components/main/Main";
import About from "./Components/about/About";
import Stars from "./Components/Stars/Stars";
import Edu from "./Components/edu/Edu";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import BTTT from "./Components/backToTheTop/BTTT";

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Edu />
      <Projects />
      <Skills />
      <BTTT />
    </div>
  );
}

export default App;
