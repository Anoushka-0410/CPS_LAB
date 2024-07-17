import "../Styles/research.css";
import rf1 from "../assets/rf1.jpg";
import rf2 from "../assets/rf2.jpg";
import rf3 from "../assets/rf3.jpg";
import rf4 from "../assets/rf4.jpg";
import rf5 from "../assets/rf5.jpg";
import rf6 from "../assets/rf6.png";
function Research() {
  return (
    <div className="rf">
      <div className="header">
        <img src={rf1} alt="" />
        <p>Research focus</p>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <img src={rf2} alt="Image 1" />
          <div className="overtext">
            <i class="fa fa-heartbeat"></i>
            <h3>AI in Healthcare</h3>
          </div>
        </div>
        <div className="flex-item">
          <img src={rf3} alt="Image 2" />
          <div className="overtext">
            <i class="fa fa-street-view"></i>
            <h3>Human Centered Systems</h3>
          </div>
        </div>
        <div className="flex-item">
          <img src={rf4} alt="Image 3" />
          <div className="overtext">
            <i class="fa fa-shield"></i>
            <h3>Cybersecurity</h3>
          </div>
        </div>
        <div className="flex-item">
          <img src={rf5} alt="Image 4" />
          <div className="overtext">
            <img src={rf6} alt="" />
            <h3>Wearables</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Research;
