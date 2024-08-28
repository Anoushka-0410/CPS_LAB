import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";
import lab_1 from "../assets/lab_photo_1.jpg";
import apply1 from "../assets/apply1.png";
import logo from "../assets/logo.png";
import think from "../assets/think.png";
import connect from "../assets/connect.png";
import share from "../assets/share.png";
import collab from "../assets/collab.png";
import { Link } from "react-router-dom";
import animation from "../../public/animation";
import DomainSection from "../Components/DomainSection";
import React, { useState, useEffect } from "react";
import "../Styles/home.css";

const images = [
  lab_1,
  "//cps.iic.ac.in/wp-content/uploads/2022/04/WIN_20220416_15_59_55_Pro-100x50.jpg",
  "//cps.iic.ac.in/wp-content/uploads/2023/10/1-11-of-11-100x50.jpg",
  // Add more images if needed
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    animation();
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="home-container">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`home-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
        <div className="overlay-text">
          <span className="iic_name">
            Institute of Informatics and Communications
          </span>
        </div>
        <div className="overlay-text2">
          <span className="cps-name">CyPSi Laboratory</span>
        </div>
      </div>

      <div className="second">
        <div className="box">
          <img src={img1} alt="" className="img" />
          <p>Human Centered Systems</p>
        </div>
        <div className="box">
          <i className="icon fa-solid fa-heart-pulse"></i>
          <p>Healthcare</p>
        </div>

        <div className="box">
          <i className="icon fa-solid fa-lock "></i>
          <p>Security</p>
        </div>

        <div className="no-border-box">
          <img src={img4} alt="" className="img" />
          <p>Wearables</p>
        </div>
      </div>
      <div className="apply">
        <div className="app-img item">
          <img src={apply1} alt="" />
        </div>
        <div className="app-txt item">
          <h3>Apply for Research Internship</h3>
          <span className="open">Applications are now open</span>
          <span className="app-body">
            We provide our interns experiences that enable them to develop
            data-backed research aptitude towards new and exciting domains.
          </span>
          <Link to="/joinus" className="apply-button">
            Apply Now
          </Link>
        </div>
      </div>
      <div className="about-wrapper">
        <div id="animation-light"></div>
        <div className="about">
          <img src={logo} alt="" />
          <div className="about-txt">
            <h3>About the Lab</h3>
            <p className="about-intro">
              The CyPSi Lab, established in 1999 at the Institute of Informatics
              and Communication (IIC) of University of Delhi has contributed to
              a wide range of domains from Educational Technologies, to
              scientific research papers and to Cyber Physical Systems (CPS)
            </p>
            <p className="about-body">
              The lab offers an opportunity to be at the forefront of Research
              and Development (R & D) in Cyber Physical Systems (CPS) & allied
              disciplines and collaborate with research groups worldwide to deal
              with real life challenges. The research outcomes are further
              developed by Product and Service groups thereby promoting
              entrepreneurship and their delivery to intended audiences.
            </p>
          </div>
        </div>
      </div>

      <div className="pink-board">
        <div className="box2 odd">
          <img src={think} alt="" className="think" />
          <p>Think</p>
        </div>
        <div className="box2 even">
          <img src={connect} alt="" className="sqr"></img>
          <p>Connect</p>
        </div>

        <div className="box2 odd">
          <img src={share} alt="" className="sqr" />
          <p>Share</p>
        </div>

        <div className="box2 even">
          <img src={collab} alt="" className="sqr" />
          <p className="clb">Collaborate</p>
        </div>
      </div>

      <div className="research-domain-wrapper">
        <h3>RESEARCH DOMAINS</h3>
        <DomainSection />
      </div>

      {/* news and updates */}

      <div className="work-wrapper">
        <div className="work-heading">
          <h3>WORK WITH US</h3>
        </div>
        <div className="work-cards">
          <a href="" className="card" id="card1">
            <div className="card-bg">
              <div className="card-txt">PhD Programme</div>
            </div>
          </a>
          <Link to="/joinus" className="card" id="card2">
            <div className="card-bg">
              <div className="card-txt">Research Internship</div>
            </div>
          </Link>
          <a href="" className="card" id="card3">
            <div className="card-bg">
              <div className="card-txt">Incubation</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
