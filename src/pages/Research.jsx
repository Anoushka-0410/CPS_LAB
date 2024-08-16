import "../Styles/research.css";
import rf1 from "../assets/rf1.jpg";

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
