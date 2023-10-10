import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import "./Register.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { auth } from "../firebaseAuth/auth";
import { useAuth } from "../firebaseAuth/authContext";
import { useNavigate, Link } from "react-router-dom";
import {
  addDoc,
  getDoc,
  getFirestore,
  setDoc,
  doc,
  collection,
} from "firebase/firestore";

const db = getFirestore();

const id_colRef = collection(db, "IDgen");
const map_colRef = collection(db, "Maps");

const count_docRef = doc(id_colRef, "counter");

const Register = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
    if (currentUser) {
      navigate("/");
    }
  });
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    school: "",
    city: "",
    state: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkIfEmailExists = async (email) => {
      try {
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        return signInMethods.length > 0;
      } catch (error) {
        console.error("Error checking if email exists:", error);
        return false; // Assume email does not exist in case of an error
      }
    };

    // Check if the user already exists
    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
      alert(
        "User already exists. Please use a different email address to Register."
      );
      return;
    }

    //Validations
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!contact) {
      validationErrors.contact = "Contact is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (!school) {
      validationErrors.school = "School/College name is required";
    }

    if (!city) {
      validationErrors.city = "City is required";
    }

    if (!state) {
      validationErrors.state = "State is required";
    }

    // If there are validation errors, update error messages and return
    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    let curr;
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userDetails) => {
        console.log(userDetails);
        alert(`${name} registerd successfully`);
        navigate("/login");

        const docData = await getDoc(count_docRef);
        const { value } = docData.data();
        curr = Number(value) + 1;
        console.log(curr);

        await setDoc(count_docRef, { value: curr }).then(() => {
          let id = String(curr); // Custom ID
          setDoc(doc(db, "Participant", id), {
            Name: name,
            Contact: contact,
            Email: email,
            College: school,
            City: city,
            State: state,
          }).then(async () => {
            // setForm({});

            setCity("");
            setSchool("");
            setContact("");
            setEmail("");
            setName("");
            setState("");

            setPassword("");

            console.log("Pushed");

            // UID

            await setDoc(doc(db, "UID", email), {
              uid: id,
            });
            console.log("UID");

            // Maps

            await addDoc(map_colRef, {
              custom: id,
            });
            console.log("Mapped");
          });
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      emailExists
      <div className="login-container login-container-custom">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12"></div>
            <div className="col my-5">
              <div className="card p-4 mb-5 mt-5 auth-card auth-card-custom button-3">
                <div className="card-body custom-card-body">
                  <center>
                    <h5 className="card-title card-title-custom mb-5" style={{ color: "white" }}>
                      SIGN UP
                    </h5>
                  </center>
                  <form>
                    <div className="mb-3">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="NmaeInput"
                        placeholder="Name"
                        aria-describedby="nameError"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      ></input>
                      {errorMessages.name && (
                        <small id="nameError" className="form-text text-danger">
                          {errorMessages.name}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        name="contact"
                        type="text"
                        className="form-control"
                        id="contactInput"
                        placeholder="Contact No"
                        aria-describedby="contactError"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      ></input>
                      {errorMessages.contact && (
                        <small
                          id="contactError"
                          className="form-text text-danger"
                        >
                          {errorMessages.contact}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Email"
                        value={email}
                        aria-describedby="emailError"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>
                      {errorMessages.email && (
                        <small
                          id="emailError"
                          className="form-text text-danger"
                        >
                          {errorMessages.email}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        placeholder="Password"
                        value={password}
                        aria-describedby="passwordError"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      ></input>
                      {errorMessages.password && (
                        <small
                          id="passwordError"
                          className="form-text text-danger"
                        >
                          {errorMessages.password}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        name="school"
                        type="text"
                        className="form-control"
                        id="schoolInput"
                        placeholder="School/College name"
                        value={school}
                        aria-describedby="schoolError"
                        onChange={(e) => {
                          setSchool(e.target.value);
                        }}
                      ></input>
                      {errorMessages.school && (
                        <small
                          id="schoolError"
                          className="form-text text-danger"
                        >
                          {errorMessages.school}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        name="city"
                        type="text"
                        className="form-control"
                        id="cityInput"
                        placeholder="City"
                        value={city}
                        aria-describedby="cityError"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      ></input>
                      {errorMessages.city && (
                        <small id="cityError" className="form-text text-danger">
                          {errorMessages.city}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        name="state"
                        type="text"
                        className="form-control"
                        id="stateInput"
                        placeholder="State"
                        aria-describedby="stateError"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                      ></input>
                      {errorMessages.state && (
                        <small id="cityError" className="form-text text-danger">
                          {errorMessages.state}
                        </small>
                      )}
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
                        href="/login"
                        className="text-muted text-decoration-none"
                      >
                        <p style={{ color: "white", marginTop: "19px" }}>
                          {" "}
                          Login?
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
    </>
  );
};

export default Register;
