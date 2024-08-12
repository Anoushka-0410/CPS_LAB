import React from "react";
import "../Styles/researchcard.css";
function ResearchCard(props) {
  const { img, icon, title } = props;
  return (
    <div className="flex-item">
      <img src={img} className="research-card-bg" alt="Image 1" />
      <div className="overtext">
        <img src={icon} className="card-icon"></img>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
export default ResearchCard;
