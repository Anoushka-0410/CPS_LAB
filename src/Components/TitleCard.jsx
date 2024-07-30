import React from "react";
import "../Styles/titlecard.css";
function TitleCard(props) {
  const { title, backgroundImage } = props;
  return (
    <div
      className="title-header"
      style={{ "--background-image": `url(${backgroundImage})` }}
    >
      <h3>{title}</h3>
    </div>
  );
}
export default TitleCard;
