import { useState } from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { auth } from "./firebaseAuth/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
      console.log(userCredentials)
    }).catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <div>
      <Navbar />

      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col my-5">
              <div
                class="card p-5 auth-card"
                style={{ backgroundColor: "lightseagreen" }}
              >
                <div class="card-body custom-card-body">
                  <center>
                    <h5 class="card-title mb-5" style={{ color: "white" }}>
                      USER LOGIN
                    </h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label"
                      ></label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label"
                      ></label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <a href="/" className="text-muted text-decoration-none">
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button type="button" className="btn m-2 button-3" onClick={handleSubmit}>
                      Submit
                    </button>
                    <div className="mb-3">
                      <a
                        href="/register"
                        className="text-muted text-decoration-none"
                        style={{ color: "white" }}
                      >
                        New User? Signup
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
    </div>
  );
};

export default Login;
