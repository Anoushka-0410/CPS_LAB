import React from "react";
import img from "../assets/wearables_banner.png";
import ResearchCardTitle from "../Components/ResearchCardTitle.jsx";
import parse from "html-react-parser";
import "../Styles/healthcare.css";

const card_t = "Wearables";
const section_1 =
  "Wearable technology is a class of electronics that deals with devices that can be worn as accessories, embedded in clothing, implanted in the body, or tattooed or scribbled on the skin. These devices are generally hands-free computer devices, have microprocessors and are improved with the ability to transfer data via the Internet.<br><br>Wearable technology is evolving into an eminent branch of the internet of Things with profound implementations in other fields. It is the strength of networks, high-speed data transfer, and mini microprocessors that have enabled the development and improvement of this technology.";
const section_2 =
  "Embedded in fabric or accessories, or worn or scribbled directly on the body, these devices not only perform many basic computing functions, akin to laptops and smartphones but can also perform unique health-tracking services such as calorie tracking and sleep monitoring amongst others as a result of being in contact with the user’s body.";
const section_3 =
  "The recent spectacular progress in Sensor technologies, Materials, IoT, ICT, and microelectronic fabrication techniques has created a significant stimulus towards the development of smart wearable devices. As a result, this sector is witnessing explosive growth, offering huge market and research opportunities. Wearable devices are complex systems of sensors, cross-domain communication networks, handling large amounts of data with real-time decision-making capabilities. In addition, they provide continuous autonomous service over a long period. Therefore, rigorous research in computing and design technologies is needed to adequately overcome the challenges to satisfy the stringent demands of wearable devices.";

function Wearables() {
  return (
    <div className="wearables-systems-wrapper rf-card-wrapper">
      <ResearchCardTitle backgroundImage={img} title={card_t} />
      <div className="wearables-content rf-card-content">
        <div className="wearables-section-1 rf-card-section1">
          <h3>Wearable Devices</h3>
          <div className="section1-content">{parse(section_1)}</div>
          <div className="line-divider"></div>
        </div>
        <div className="cyber-section-2 rf-card-section2">
          {parse(section_2)}
        </div>
        <div className="line-divider"></div>
        <div className="cyber-section-3 rf-card-section3">
          {parse(section_3)}
        </div>
      </div>
    </div>
  );
}
export default Wearables;
