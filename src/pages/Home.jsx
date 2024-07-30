import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";
import apply1 from "../assets/apply1.png";
import logo from "../assets/logo.png";
import think from "../assets/think.png";
import connect from "../assets/connect.png";
import share from "../assets/share.png";
import collab from "../assets/collab.png";
import rd1 from "../assets/rd1.jpg";
import rd2 from "../assets/rd2.jpg";
import rd3 from "../assets/rd3.jpg";
import rd4 from "../assets/rd4.jpg";

import React, { useState, useEffect } from "react";
import "../Styles/home.css";

const images = [
  "//cps.iic.ac.in/wp-content/uploads/2022/04/WIN_20220416_15_50_59_Pro-100x50.jpg",
  "//cps.iic.ac.in/wp-content/uploads/2022/04/WIN_20220416_15_59_55_Pro-100x50.jpg",
  "//cps.iic.ac.in/wp-content/uploads/2023/10/1-11-of-11-100x50.jpg",
  // Add more images if needed
];

const data_rd = [
  {
    id: 1,
    img: rd1,
    tabname: "Human Centered Systems",
    content:
      "Cyberization is all pervasive today with technology-driven engineering systems having a significant presence in almost all spheres of life. In fact, with each passing year, they are evolving at a very fast pace in terms of AI, computational capacities and their scope of use. \nWhile they offer numerous benefits to society on one hand, the current state of cyberization is creating an intellectual challenge to envision, design and research Human-Centered Systems for the future. Since human-centered systems integrate CPS with various social units - organizations, communities and distinctive social processes and practices; our lab envisions meeting the research challenges of making them more usable and sustainable.",
  },
  {
    id: 2,
    img: rd2,
    tabname: "Healthcare",
    content:
      " The demand for remote healthcare is getting more crucial than ever even as CPSs are making spectacular advancements in this sector. It is piloting technologies and software to address challenging healthcare issues and revolutionizing how myriad healthcare issues are tackled. The CPS healthcare ecosystem has evolved in telemedicine, connected-health, mobile-health and intelligent health in the last two decades. Healthcare-Cyber Physical Systems (H-CPS) networks are available anywhere, anytime and to anyone with the means to digital access. Yet, they are to be rigorously explored and are a matter of high research interest.",
  },
  {
    id: 3,
    img: rd3,
    tabname: "Cybersecurity",
    content:
      "CPSs are closely integrated physical processes for networking, computation, feedback loops and comprise several tiny devices with sensing, computing and wireless communication capabilities. These enhanced functionality, automation, and connectivity also bring significant cybersecurity challenges to the CPS. Moreover,  extensive connectivity makes CPS vulnerable to cyber threats and attacks, making safety, security and privacy essential research issues.",
  },
  {
    id: 4,
    img: rd4,
    tabname: "Wearables",
    content:
      "The recent spectacular progress in Sensor technologies and allied materials, internet of Things (IoT), Informations and Technology (ICT) and microelectronic fabrication techniques have created a significant stimulus towards the development of smart wearable devices. As a result, this sector is witnessing an explosive growth offering huge market and research opportunities. \nWearable devices are complex systems of sensors and cross-domain communication networks handling large amounts of data with real-time decision-making capabilities. In addition, they provide continuous autonomous service over a long period. Therefore, rigorous research in computing and design technologies is required to adequately overcome these challenges to satisfy the stringent demands of wearable devices.",
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };
  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  const selectedData = data_rd.find((item) => item.id === selectedTab);

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
          <img src={img1} alt="" className="img" />#
          <p>Human Centered Systems</p>
        </div>
        <div className="line"></div>
        <div className="box">
          <i class="icon fa-solid fa-heart-pulse"></i>
          <p>Healthcare</p>
        </div>
        <div className="line"></div>

        <div className="box">
          <i class="icon fa-solid fa-lock "></i>
          <p>Security</p>
        </div>
        <div className="line"></div>

        <div className="box">
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
          <button>Apply Now</button>
        </div>
      </div>
      <div className="about">
        <img src={logo} alt="" />
        <div className="about-txt">
          <h3>About the Lab</h3>
          <p className="about-intro">
            The CyPSi Lab, established in 1999 at the Institute of Informatics
            and Communication (IIC) of University of Delhi has contributed to a
            wide range of domains from Educational Technologies, to scientific
            research papers and to Cyber Physical Systems (CPS)
          </p>
          <p className="about-body">
            The lab offers an opportunity to be at the forefront of Research and
            Development (R & D) in Cyber Physical Systems (CPS) & allied
            disciplines and collaborate with research groups worldwide to deal
            with real life challenges. The research outcomes are further
            developed by Product and Service groups thereby promoting
            entrepreneurship and their delivery to intended audiences.
          </p>
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

        <div className="research-dashboard">
          <div className="image-section">
            <img src={selectedData.img} alt="Image" />
          </div>
          <div className="rd-inner-wrap">
            <div className="tab-section">
              {data_rd.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={item.id === selectedTab ? "active-tab" : ""}
                >
                  {item.tabname}
                </button>
              ))}
            </div>
            <div className="content-section">
              <p>{selectedData.content}</p>
            </div>
          </div>
        </div>
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
          <a href="" className="card" id="card2">
            <div className="card-bg">
              <div className="card-txt">Research Internship</div>
            </div>
          </a>
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
