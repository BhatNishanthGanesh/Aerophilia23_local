// import "./Login.css";
import "./Footer.css"
import logo from "../../images/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";


const Footer = () => {
  return (
    <>
      <div className="container-fluid container-fluid-custom">
        <div className="row">
          <div className="col-md-4 col-sm-12 navigate">
            <div
              className="card card-footer p-5"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="card-header card-header-custom">REACH US</div>
              <img src={logo} className="card-img-top " alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                  Sahyadri College of Engineering and Management Mangaluru,
                  Dakshina Kannada District, Karnataka, India - 575007
                </p>
                <div className="icons">
                  <a href="https://instagram.com/aerophilia_2022?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="footer-icon"  />
                  </a>
                  <a href="https://youtu.be/3s9FAEonO2Y" target="_blank" rel="noopener noreferrer">
                  <FiYoutube className="footer-icon" />
                  </a>
                  <a href="mailto:example@gmail.com">
                  <FiMail className="footer-icon" />
                  </a>
                  <a href="tel:+919480382738">
                  <FiPhoneCall className="footer-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 links">
            <div className="card card-footer p-5">
              <div className="card-header card-header-custom">NAVIGATE</div>
              <ul className="list-group list-group-flush p-3">
                <li className="list-group-item">Home</li>
                <li className="list-group-item">Events</li>
                <li className="list-group-item">Gallery</li>
                <li className="list-group-item">About Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 reach-us">
            <div className="card card-footer p-5">
              <div className="card-header card-header-custom">LINKS</div>
              <ul className="list-group list-group-flush p-3">
                <li className="list-group-item">Privacy policy</li>
                <li className="list-group-item">Refund and cancellation policy</li>
                <li className="list-group-item">Terms and conditions</li>
              </ul>
            </div>
          </div>
          <div className="card-text copyright"style={{backgroundColor:"black",color:"white"}}>
            <center>
          
              &copy; 2023 Aerophilia. All rights reserved.
            </center>
            <center>Developed by TEAM CHALLENGERS</center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
