import "../Styles/navbar.css";
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
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <img
        src="https://cps.iic.ac.in/wp-content/uploads/2022/05/cypsi_lab_logo-800x375.png"
        alt=""
      />
      <div className="innav">
        <p>Home</p>
        <p>Research Focus</p>
        <p>Publications</p>
        <p>People</p>
        <p>Join Us</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}
export default Navbar;
