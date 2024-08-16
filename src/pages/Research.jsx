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
import card_list from "../assets/ResearchFocusCardList";
import TitleCard from "../Components/TitleCard";
import ResearchCard from "../Components/ResearchCard";
import { Link } from "react-router-dom";
const main_title = "Research Focus";

function Research() {
  return (
    <div className="rf">
      <TitleCard backgroundImage={rf1} title={main_title} />

      <div className="flex-container">
        {card_list.map((item) => {
          return (
            <Link to={item.path}>
              <ResearchCard {...item} key={item.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Research;
