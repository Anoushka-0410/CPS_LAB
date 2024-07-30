import React from "react";
import TitleCard from "../Components/TitleCard";
import "../Styles/titlecard.css";
import "../Styles/joinus.css";
import img from "../assets/joinus.jpg";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons/faGoogleDrive";

const main_title = "Apply To CPS Lab";
const steps_list = [
  {
    idx: "1",
    title: "Fill Application Form",
    desc: "Provide all the required details in the application form for the desired position.",
  },
  {
    idx: "2",
    title: "Scrutiny of the Application",
    desc: "We shortlist the applications after thorough checks for the most suitable candidates.",
  },
  {
    idx: "3",
    title: "Complete Test / Assignment",
    desc: "A test / assignment is given to you for your evaluation.",
  },
  {
    idx: "4",
    title: "Give the Interview",
    desc: "The shortlisted candidates are asked to attend personal interviews",
  },
  {
    idx: "5",
    title: "Provide your documents",
    desc: "The selected candidates have to provide proof documents for identity verification.",
  },
  {
    idx: "6",
    title: "Last Decision",
    desc: "A final decision is made on the verified candidates and results are communicated",
  },
];
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
