import "./Navbar.css";
function Navbar(){
  return(
    <div className="container">
      <div className="n-left">
        <div className="logo">Hend</div>
        <div className="toggle">toggle</div>
      </div>
      <div className="n-right">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
        </ul>
        <button className="button">Contact Us</button>
      </div>
    </div>
  )
}
export default Navbar;