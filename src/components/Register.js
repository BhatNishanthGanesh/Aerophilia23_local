import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { auth } from "./firebaseAuth/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        console.log(userDetails);
      })
      .catch((error) => {
        console.log(error);
      });

      setName("")
      setContact("")
      setEmail("")
      setPassword("")
      setSchool("")
      setCity("")
      setState("")
      
  };

  return (
    <>
      <Navbar />
      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col my-5">
              <div
                class="card p-4 mb-5 auth-card"
                style={{ backgroundColor: "lightseagreen" }}
              >
                <div class="card-body custom-card-body">
                  <center>
                    <h5 class="card-title mb-5" style={{ color: "white" }}>
                      SIGN UP
                    </h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Name"
                        aria-describedby="emailHelp"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contact No"
                        value={contact}
                        onChange={(e) => setContact(e.target.contact)}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.setEmail);
                        }}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.password);
                        }}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="School/College name"
                        value={school}
                        onChange={(e) => {
                          setSchool(e.target.school);
                        }}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="City"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.city);
                        }}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="State"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.state);
                        }}
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="btn m-2 button-3"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <div className="mb-3">
                      <a
                        href="/login"
                        className="text-muted text-decoration-none"
                      >
                        Login?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
