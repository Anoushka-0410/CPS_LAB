import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <img
        src="https://cps.iic.ac.in/wp-content/uploads/2022/05/cypsi_lab_logo-800x375.png"
        alt=""
      />
      <div className="innav">
        <Link to="home" className="nav-link">
          <div className="nav-element">Home</div>
        </Link>
        <Link to="research" className="nav-link">
          <div className="nav-element">Research Focus</div>
        </Link>
        <Link to="publications" className="nav-link">
          <div>Publications</div>
        </Link>

        <Link to="presentmembers" className="nav-link">
          <div className="nav-element">People</div>
        </Link>
        <Link to="joinus" className="nav-link">
          <div className="nav-element">Join Us</div>
        </Link>
        <Link to="contactus" className="nav-link">
          <div className="nav-element">Contact Us</div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
