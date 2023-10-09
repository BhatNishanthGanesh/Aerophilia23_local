import { useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { auth } from "../firebaseAuth/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Prompt messaage has been sent successfully to the user");
        navigate("/login");
      })
      .catch(() => {
        console.log("Error in resetting");
      });
  };

  return (
    <div>
      <Navbar />

      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12"></div>
            <div className="col my-5">
              <div
                className="card p-5 auth-card button-3"
                style={{ backgroundColor: "lightseagreen" }}
              >
                <div className="card-body custom-card-body">
                  <center>
                    <h5 className="card-title mb-5" style={{ color: "white" }}>
                      RESET PASSWORD
                    </h5>
                  </center>
                  <form>
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="form-label"
                      ></label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="btn m-2 button-3"
                      onClick={handleSubmit}
                      style={{ color: "white" }}
                    >
                      Submit
                    </button>
                    <div className="mb-3">
                      <a
                        href="/register"
                        className="text-muted text-decoration-none"
                      >
                        <p style={{ color: "white", paddingTop: "20px" }}>
                          {" "}
                          New User? Signup
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
