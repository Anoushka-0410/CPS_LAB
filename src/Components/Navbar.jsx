import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const navItems = [
    { to: "/", text: "Home", hasDropdown: false },
    { to: "research", text: "Research Focus", hasDropdown: false },
    { to: "publications", text: "Publications", hasDropdown: false },
    {
      to: "presentmembers",
      text: "People",
      hasDropdown: true,
      dropdownItems: [
        { to: "presentmembers", text: "Present Lab Members" },
        { to: "pastmembers", text: "Past Lab Members" },
      ],
    },
    {
      to: "joinus",
      text: "Join Us",
      hasDropdown: true,
      dropdownItems: [{ to: "joinus", text: "Apply to CPS Lab" }],
    },
    { to: "contactus", text: "Contact Us", hasDropdown: false },
  ];

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
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoverIndex();
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""} `}>
      <img
        src="https://cps.iic.ac.in/wp-content/uploads/2022/05/cypsi_lab_logo-800x375.png"
        alt=""
        className="nav-img"
      />
      <div className="innav" onMouseLeave={handleMouseLeave}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${item.hasDropdown ? "dropdown" : ""}`}
          >
            <Link to={item.to} className="nav-link">
              <div
                className={`nav-element ${
                  activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => handleClick(index)}
              >
                {item.text}
              </div>
              {item.hasDropdown && (
                <div className="dropdown-content">
                  {item.dropdownItems.map((dropdownItem, i) => (
                    <Link
                      key={i}
                      to={dropdownItem.to}
                      className="dropdown-link"
                    >
                      {dropdownItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
export default Navbar;
