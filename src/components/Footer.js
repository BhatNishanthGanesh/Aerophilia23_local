import "./Login.css";
import logo from "./logo.png"
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <>
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-sm-12 navigate">
            <div
              class="card card-footer p-5"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div class="card-header">REACH US</div>
              <img src={logo} class="card-img-top " alt="..."></img>
              <div class="card-body">
                <p class="card-text">
                  Sahyadri College of Engineering and Management Mangaluru,
                  Dakshina Kannada District, Karnataka, India - 575007
                </p>
                <div class="icons">
                  <FaInstagram class="footer-icon" />
                  <FiYoutube class="footer-icon" />
                  <FiMail class="footer-icon" />
                  <FiPhoneCall class="footer-icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 links">
            <div class="card card-footer p-5">
              <div class="card-header">NAVIGATE</div>
              <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">Home</li>
                <li class="list-group-item">Events</li>
                <li class="list-group-item">Gallery</li>
                <li class="list-group-item">About Us</li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 reach-us">
            <div class="card card-footer p-5">
              <div class="card-header">LINKS</div>
              <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">Privacy policy</li>
                <li class="list-group-item">Refund and cancellation policy</li>
                <li class="list-group-item">Terms and conditions</li>
              </ul>
            </div>
          </div>
          <div class="card-text copyright"style={{backgroundColor:"black",color:"white"}}>
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
