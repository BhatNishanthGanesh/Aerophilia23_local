import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" class="logo"></img>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto small-screen">
              <li class="nav-item m-3">
                <Link
                  to="/"
                  class="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  HOME
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                  to="/events"
                  class="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  EVENT
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                  to="/"
                  class="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  GALLERY
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                  to="/"
                  class="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  ABOUT US
                </Link>
              </li>

              <li class="nav-item m-3">
                <Link
                  to="/footer"
                  class="text-decoration-none p-3 m-2"
                  style={{ color: "white" }}
                >
                  FOOTER
                </Link>
              </li>

              <li class="nav-item">
                <button type="button" className="btn m-2 button-3 reg-btn">
                  <Link
                    to="/register"
                    class="text-decoration-none m-1"
                    style={{ color: "white" }}
                  >
                    REGISTER
                  </Link>
                </button>
              </li>

              <li class="nav-item">
                <button type="button" className="btn m-2 button-3 lg-btn">
                  <Link
                    to="/login"
                    class="text-decoration-none"
                    style={{ color: "white" }}
                  >
                    LOGIN
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
