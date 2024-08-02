import "../Styles/research.css";
import rf1 from "../assets/rf1.jpg";
import rf2 from "../assets/rf2.jpg";
import rf3 from "../assets/rf3.jpg";
import rf4 from "../assets/rf4.jpg";
import rf5 from "../assets/rf5.jpg";
import icon4 from "../assets/rf6.png";
import icon1 from "../assets/heart-pulse-solid.svg";
import icon2 from "../assets/street-view-solid.svg";
import icon3 from "../assets/shield-solid.svg";
import TitleCard from "../Components/TitleCard";
import ResearchCard from "../Components/ResearchCard";
import { Link } from "react-router-dom";
const main_title = "Research Focus";

const card_list = [
  {
    id: 1,
    img: rf2,
    icon: icon1,
    path: "/healthcare",
    title: "AI in Healthcare",
  },
  {
    id: 2,
    img: rf3,
    icon: icon2,
    path: "/humansystems",
    title: "Human Centered Systems",
  },
  {
    id: 3,
    img: rf4,
    icon: icon3,
    path: "/cyber",

    title: "Cybersecurity",
  },
  {
    id: 4,
    img: rf5,
    icon: icon4,
    path: "/wearables",

    title: "Wearables",
  },
];
function Research() {
  return (
    <div className="rf">
      {/* //   <div className="header">
    //     <img src={rf1} alt="" />
    //     <p>Research focus</p>
    //   </div> */}
      <TitleCard backgroundImage={rf1} title={main_title} />

      <div className="flex-container">
        {card_list.map((item) => {
          return (
            <Link to={item.path}>
              <ResearchCard {...item} key={item.id} />
            </Link>
          );
        })}
        {/* <div className="flex-item">
          <img src={rf2} alt="Image 1" />
          <div className="overtext">
            <i className="fa fa-heartbeat"></i>
            <h3>AI in Healthcare</h3>
          </div>
        </div>
        <div className="flex-item">
          <img src={rf3} alt="Image 2" />
          <div className="overtext">
            <i className="fa fa-street-view"></i>
            <h3>Human Centered Systems</h3>
          </div>
        </div>
        <div className="flex-item">
          <img src={rf4} alt="Image 3" />
          <div className="overtext">
            <i className="fa fa-shield"></i>
            <h3>Cybersecurity</h3>
          </div>
        </div>
        <div className="flex-item">
          <img src={rf5} alt="Image 4" />
          <div className="overtext">
            <img src={icon4} alt="" />
            <h3>Wearables</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Research;
