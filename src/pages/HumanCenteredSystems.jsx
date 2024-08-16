import React from "react";
import img from "../assets/human_header.jpg";
import ResearchCardTitle from "../Components/ResearchCardTitle.jsx";
import parse from "html-react-parser";
import "../Styles/healthcare.css";

const card_t = "Human Centered Systems";

const section1 =
  "Technology-driven engineering systems have a significant presence in almost all spheres of life today. They are evolving at a very fast pace in terms of AI, computational capacities and their scope of use with each passing year.<br><br>While they offer numerous benefits to society on one hand, there is an intellectual challenge to envision, design and research human-centered Systems for the future to integrate CPS with various social units – organizations, communities and distinctive social processes and practices.";
const section2 =
  " Human Cyber Physical Systems (HCPS) are emerging to identifyprinciples for the human-centered design of future CPS and to break away the limitations of Cyber Physical. These systems enable the development of social systems by placing humans inside the control loop.";

function HumanCenteredSystems() {
  return (
    <div className="human-systems-wrapper rf-card-wrapper">
      <ResearchCardTitle backgroundImage={img} title={card_t} />
      <div className="human-content rf-card-content">
        <div className="human-section-1 rf-card-section1">
          <h3>About Human Centered Systems</h3>
          <div className="section1-content">{parse(section1)}</div>
          <div className="line-divider"></div>
        </div>
        <div className="human-section-2 rf-card-section2">
          {parse(section2)}
        </div>
      </div>
    </div>
  );
}
export default HumanCenteredSystems;
