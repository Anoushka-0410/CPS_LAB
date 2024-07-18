import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import ContactUs from "./pages/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/*<Home />*/}
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
