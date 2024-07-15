import "../Styles/navbar.css";
function Navbar() {
  return (
    <div className="nav">
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
