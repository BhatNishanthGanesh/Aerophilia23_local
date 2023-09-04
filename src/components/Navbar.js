import { Outlet, Link } from "react-router-dom";
import img from "./Aerophilia-logo.png";

import "./Login.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={img} alt="Logo" class="logo"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item m-3">
                <Link to="/" class="text-decoration-none p-5">
                  HOME
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link to="/events" class="text-decoration-none p-5">
                  EVENT
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link to="/" class="text-decoration-none p-5">
                  GALLERY
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link to="/" class="text-decoration-none p-5">
                  ABOUT US
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link to="/footer" class="text-decoration-none p-5 ">
                  FOOTER
                </Link>
              </li>

              <li class="nav-item">
                <button type="button" className="btn m-2 button-3 reg-btn">
                  <Link to="/register" class="text-decoration-none ">
                    REGISTER
                  </Link>
                </button>
              </li>

              <li class="nav-item">
                <button type="button" className="btn m-2 button-3 lg-btn">
                  <Link to="/login" class="text-decoration-none">
                    LOGIN
                  </Link>
                </button>
              </li>
            </ul>

            <form class="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
