import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import ContactUs from "./pages/ContactUs";
import Footer from "./Components/Footer";
import JoinUs from "./pages/JoinUs";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <JoinUs />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}
export default App;
