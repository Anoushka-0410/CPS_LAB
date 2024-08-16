import React from "react";
import ResearchCardTitle from "../Components/ResearchCardTitle";
import img from "../assets/healthcare_banner.png";
import parse from "html-react-parser";
import "../Styles/healthcare.css";

const main_title = "AI in Healthcare";
const section1 =
  "Computers are considered artificially intelligent when they exhibit capabilities to mimic the cognitive actions of humans such as learning, thinking, making decisions or taking actions. The domain of Artificial Intelligence (AI) in healthcare, hence, involves the use of machines to analyse and act on medical data by learning from it in the form of making intelligent predictions of biomedical relevance.<br><br>AI in healthcare has become a critical research domain due to the development of hardware that is capable of acquiring health data as well as machines that can perform computations on such data. Lately, researchers have been focused on the application of deep learning (DL) algorithms in medical and healthcare scenarios. <br><br>AI helps doctors and medical service providers off-load themselves from tasks that can be executed by machines. It also helps deliver better diagnoses and treatment plans, keeping doctor fatigue at bay. Services of preventive healthcare and health recommendations can also be provisioned using insights that are learnt from large amounts of medical data which was practically impossible a few years ago.";

const section2 =
  "The vast amounts of data that are available to us today due to smarthealthcare devices give rise to opportunities for development of intelligent healthcare systems, medically relevant decision support systems and expert systems for medical professionals.";

const section3 =
  "We aspire to develop AI based solutions for healthcare that are practically feasible for patients of all kinds and medical professionals from all domains. Through the expansive nature of Health Information Technology, we intend to provide the systems we build, to people of all socio-economic strata.";

function AIHealthcare() {
  return (
    <div className="healthcare-wrapper rf-card-wrapper">
      <ResearchCardTitle backgroundImage={img} title={main_title} />
      <div className="health-content rf-card-content">
        <div className="health-section-1 rf-card-section1">
          <h3>About AI in Healthcare</h3>
          <div className="section1-content">{parse(section1)}</div>
          <div className="line-divider"></div>
        </div>
        <div className="health-section-2 rf-card-section2">
          {parse(section2)}
        </div>
        <div className="line-divider"></div>
        <div className="health-section-3 rf-card-section3">
          {parse(section3)}
        </div>
      </div>
    </div>
  );
}
export default AIHealthcare;
