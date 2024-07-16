// import React, { useState, useEffect } from "react";
// import "../Styles/home.css";

// const images = [
//   "//cps.iic.ac.in/wp-content/uploads/2022/04/WIN_20220416_15_50_59_Pro-100x50.jpg",
//   "//cps.iic.ac.in/wp-content/uploads/2022/04/WIN_20220416_15_59_55_Pro-100x50.jpg",
//   "//cps.iic.ac.in/wp-content/uploads/2023/10/1-11-of-11-100x50.jpg",
//   // Add more images if needed
// ];

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 10 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);
//   const changeImage = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div className="home-container">
//       {/* <div className="first">

//         </div> */}
//       <div className="image-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className={`home-image ${
//               index === currentImageIndex ? "active" : ""
//             }`}
//           />
//         ))}
//         <div className="overlay-text">lab</div>
//       </div>
//       {/* <div className="image-navigation">
//         {images.map((image, index) => (
//           <span
//             key={index}
//             className={`dot ${index === currentImageIndex ? "active" : ""}`}
//             onClick={() => changeImage(index)}
//           />
//         ))}
//       </div> */}
//       <div className="second">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
//         optio, aliquam suscipit non quae laborum nihil tempora, sequi deleniti,
//         fugit magni placeat porro nam aliquid sunt repellat est ipsam
//         ullam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
//         quo atque similique doloribus soluta incidunt, sint error quasi
//         repudiandae harum placeat nobis ratione temporibus nam sunt nostrum
//         deleniti totam a.
//       </div>
//     </div>
//   );
// };

// export default Home;
import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";

import React, { useState, useEffect } from "react";
import "../Styles/home.css";

const images = [
  "//cps.iic.ac.in/wp-content/uploads/2022/04/WIN_20220416_15_50_59_Pro-100x50.jpg",
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
        <p>
          <img src={img1} alt="" className="img" />
          <p>Human Centered Systems</p>
        </p>
        <p>
          <i class="icon fa-solid fa-heart-pulse"></i>
          <p>Healthcare</p>
        </p>
        <p>
          <i class="icon fa-solid fa-lock "></i>
          <p>Security</p>
        </p>
        <p>
          <img src={img4} alt="" className="img" />
          <p>Wearables</p>
        </p>
      </div>
    </div>
  );
};

export default Home;
