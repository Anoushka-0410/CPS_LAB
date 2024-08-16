import React from "react";
import TitleCard from "../Components/TitleCard";
import "../Styles/titlecard.css";
import "../Styles/joinus.css";
import img from "../assets/joinus.jpg";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons/faGoogleDrive";
import steps_list from "../assets/JoinUsSteps";
const main_title = "Apply To CPS Lab";

const Joinsteps = (props) => {
  const { idx, title, desc } = props;
  return (
    <div className="join-steps-comp">
      <div className="step-idx">{idx}</div>
      <div className="steps-details">
        <h3 className="step-title">{title}</h3>
        <div className="step-description">{desc}</div>
      </div>
    </div>
  );
};

function JoinUs() {
  return (
    <div className="ju-outer-wrapper">
      <TitleCard backgroundImage={img} title={main_title} />
      <div className="join-wrapper">
        <div className="ju-first">
          <h3 className="ju-first-heading"> Apply for Research Internship</h3>
          <div className="ju-first-details">
            Applications are open for a 6-month internship for the 2024 batch of
            interns. We help our interns develop data-backed research aptitude
            toward new and exciting domains. Last date to apply is
            <b> January 25, 2024.</b>
          </div>
          <div className="ju-first-stipend">
            Selected candidates will receive a{" "}
            <b>monthly stipend of INR 10000.</b>
          </div>
        </div>
        <div className="ju-steps">
          <h3 className="selection-heading">The Selection Process</h3>
          <div className="steps-map">
            {steps_list.map((steps) => {
              return <Joinsteps {...steps} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default JoinUs;
