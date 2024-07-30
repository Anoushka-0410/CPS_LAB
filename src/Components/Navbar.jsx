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
        <Link to="home">
          <p>Home</p>
        </Link>
        <Link to="research">
          <p>Research Focus</p>
        </Link>
        <p>Publications</p>

        <Link to="presentmembers">
          <p>People</p>
        </Link>
        <Link to="joinus">
          <p>Join Us</p>
        </Link>
        <Link to="contactus">
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
