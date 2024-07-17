import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Research />
      <Footer />
    </div>
  );
}
export default App;
