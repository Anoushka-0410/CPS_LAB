import React from "react";

function HomeCardA(props) {
  const { img, title } = props;
  return (
    <div className="box">
      <img src={img} alt="" className="img" />
      <p>{title}</p>
    </div>
  );
}
export default HomeCardA;
