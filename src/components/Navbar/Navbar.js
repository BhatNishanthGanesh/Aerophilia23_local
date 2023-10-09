import { Link } from "react-router-dom";
// import "./Login.css";
import "./Navbar.css"
import logo from "../../images/logo.png";
import { useAuth } from "../firebaseAuth/authContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseAuth/auth";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar nav navbar-expand-lg button-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto small-screen">
              <li className="nav-item m-3">
                <Link
                  to="/"
                  className="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link
                  to="/events"
                  className="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  EVENT
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link
                  to="/courses"
                  className="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  COURSES
                </Link>
              </li>

              <li className="nav-item m-3">
                <Link
                  to="/"
                  className="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  GALLERY
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link
                  to="/"
                  className="text-decoration-none p-3"
                  style={{ color: "white" }}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link
                  to="/footer"
                  className="text-decoration-none p-3 m-2"
                  style={{ color: "white" }}
                >
                  FOOTER
                </Link>
              </li>{" "}
              <li className="nav-item m-3">
                <Link
                  to="/forgot"
                  className="text-decoration-none p-3 m-2"
                  style={{ color: "white" }}
                >
                  FORGOT
                </Link>
              </li>
              {currentUser ? (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn m-2 button-3 reg-btn"
                    onClick={async () => {
                      await signOut(auth).then(() => {
                        navigate("/");
                        console.log("logged out");
                      });
                      setCurrentUser(null);
                    }}
                  >
                    <Link
                      to="/"
                      className="text-decoration-none m-1"
                      style={{ color: "white" }}
                    >
                      LOGOUT
                    </Link>
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <button type="button" className="btn m-2 button-3 lg-btn">
                      <Link
                        to="/login"
                        className="text-decoration-none"
                        style={{ color: "white" }}
                      >
                        LOGIN
                      </Link>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
