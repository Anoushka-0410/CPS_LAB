import React from "react";
import "../Styles/researchcardtitle.css";
function ResearchCardTitle(props) {
  const { title, backgroundImage } = props;
  return (
    <div className="r-title-wrapper">
      <div
        className="r-title-header"
        style={{ "--background-image": `url(${backgroundImage})` }}
      >
        <div className="r-text-wrapper">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default ResearchCardTitle;
