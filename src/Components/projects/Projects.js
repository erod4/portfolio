import React from "react";
import Title from "../Title";
import "../projects/Projects.css";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <Title text={"Projects"} className={"title"} />
      <Project
        url={"https://github.com/erod4/barkcode"}
        title={"Pet Alert WebPage"}
        imgURL={
          "https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-1024x756.jpg"
        }
        text={
          "In my recent venture, I conceptualized and developed a MERN (MongoDB, Express.js, React.js, Node.js) stack web application focused on reuniting lost pets with their owners. This innovative platform harnesses QR code technology, allowing pet owners to create detailed pet profiles. These profiles are linked to physical dog tags with unique QR codes. When scanned, these QR codes provide instant access to the pet's information, enabling swift identification. The application also enables users to send instant alerts to the app community, informing them about their lost pets, fostering a collaborative effort in reuniting pets with their families."
        }
      />
      <Project
        url={"https://github.com/erod4/BLE_LORA_PET_TRACKER"}
        title={"BLE LoRa Pet Tracker"}
        imgURL={
          "https://billpay.slu.edu/C20197_ustores/web/uploaded_images/store_65/CODING.jpg"
        }
        text={
          "This React Native app leverages LoRa (Long Range) and Bluetooth Low Energy (BLE) technology to offer a sophisticated pet tracking solution. The app features a GPS-enabled tracker that sends location data via LoRa to a receiver, which then transmits this information to the user's iPhone through BLE. Key functionalities include real-time pet location tracking, a remote-controlled buzzer, and an LED light for increased visibility at night. Designed with a user-friendly interface, it ensures efficient tracking and management of pets, particularly beneficial in remote areas. This project demonstrates a harmonious blend of advanced connectivity, energy efficiency, and intuitive design, making it an invaluable tool for pet owners."
        }
      />
    </div>
  );
};

export default Projects;
