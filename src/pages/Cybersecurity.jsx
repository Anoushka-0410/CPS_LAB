import React from "react";
import img from "../assets/cyber_header.jpg";
import ResearchCardTitle from "../Components/ResearchCardTitle.jsx";
import parse from "html-react-parser";
import "../Styles/healthcare.css";
const card_t = "Cybersecurity";
const section_1 =
  "CPSs are closely integrated physical processes for networking, computation, feedback loops and comprise several tiny devices with sensing, computing and wireless communication capabilities. These enhanced functionality, automation, and connectivity also bring significant cybersecurity challenges to the CPS. Moreover,  extensive connectivity makes CPS vulnerable to cyber threats and attacks, making safety, security and privacy, essential research issues.";
const section_2 =
  "Security research and development is a heterogeneous area comprising a few fields that are almost mutually exclusive – cryptography, network security and operating systems. Network security is further categorized into commercial and government security.";
const section_3 =
  "The key concepts in theoretical research define abstract concepts, either computational or mathematical models that define the cyber world. Theoretical cyber security research on its part contains two main procedures: formal theoretical and simulation. The theoretical perspective of cyber security research often crosses over into other research areas. Cryptography and cryptanalysis are research areas which involve cyber security, mathematics, theory of computation, and linguistics as well. Sometimes, interdisciplinarity can make theoretical cyber security research different from the other categories of research.";
function Cybersecurity() {
  return (
    <div className="human-systems-wrapper rf-card-wrapper">
      <ResearchCardTitle backgroundImage={img} title={card_t} />
      <div className="cyber-content rf-card-content">
        <div className="cyber-section-1 rf-card-section1">
          <h3>New research in Cybersecurity</h3>
          <div className="section1-content">{parse(section_1)}</div>
          <div className="line-divider"></div>
        </div>
        <div className="cyber-section-2 rf-card-section2">{section_2}</div>
        <div className="line-divider"></div>
        <div className="cyber-section-3 rf-card-section3">{section_3}</div>
      </div>
    </div>
  );
}
export default Cybersecurity;
