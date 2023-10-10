import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Modal.css"
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../firebaseAuth/authContext";
import axios from "axios";
import {
    collection,
    doc,
    getDoc,
    getFirestore,
    onSnapshot,
    setDoc,
  } from "firebase/firestore";
  import { auth } from "../firebaseAuth/auth";

const Modal = ({ data, closeModal }) => {
    const navigate = useNavigate();
    const { userid, currentUser } = useAuth();
    const [drop, setDrop] = useState(false);
    const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(1);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
  
    const [team, setTeam] = useState({
      "Member 1": "",
    });

    async function handleUserWhilePay() {
        // console.log(typeof(userid));
        console.log(userid);
        const db = getFirestore();
        const docRef = doc(db, "UID", userid);
        const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        await setDoc(
          doc(db, `Participant/${docSnap.data().uid}/events`, data.name),
          {
            payment: true,
            report: false,
            signature: "NIL",
            teamMembers: team,
            //
          }
        ).then(async () => {
          await setDoc(
            doc(db, `EventList/${data.name}/List`, docSnap.data().uid),
            {
              flag: docSnap.data().uid,
            }
          );
        });
        // Event Participant List
  
        // console.log("Document data:", docSnap.data().uid);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const bottomRef = useRef();
  useEffect(() => {
    // bottomRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("hi");
  }, [drop]);
  async function displayRazorpay(order) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order

    // Getting the order details back

    const options = {
      key: "rzp_live_BrLSTb0WYj6jhq", // Enter the Key ID generated from the Dashboard
      amount: order.amount.toString(),
      currency: "INR",
      name: "Aerophilia 2022",
      description: " ",
      image: " ",
      order_id: order.id,
      handler: async function(response) {
        const data = {
          //data?
          orderCreationId: order.id,
          ...response,
          userId: userid,
        };

        // const result = await axios.post("http://localhost:5000/payment/success", data);

        // alert(result.data.msg);
        axios
          .post(`http://localhost:3000/api/payment/verify`, data)
          .then((result) => {
            if (result.data.signatureIsValid === "true") handleUserWhilePay();
            setPaymentSuccess(true);
          });
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

    const handleRegister = async () => {
        if (!currentUser) {
          navigate("/login");
        } else {
          if (data.subtype == "solo") {
            try {
              let order = await axios.post(`http://localhost:3000/api/create/orderid`, {
                name: data.name,
              });
              displayRazorpay(order.data);
            } catch (error) {
              console.error("Error creating order:", error);
            }
            
          } else {
            setDrop(true);
            setVisible(false);
          }
        }
      };

      const handleChange = (e) => {
        setTeam({
          ...team,
          [e.target.name]: e.target.value,
        });
      };
    
      const increaseCount = (e) => {
        setTeam({
          ...team,
          [`Member ${count + 1}`]: "",
        });
        setCount(count + 1);
      };
      const decreaseCount = (e) => {
        const newTeam = team;
        if (count > 1) {
          delete newTeam[`Member ${count}`];
          setTeam(newTeam);
          setCount(count - 1);
        }
      };

      const proceedPay = async (e) => {
        e.preventDefault();
        let order = await axios.post(`http://localhost:3000/api/create/orderid`, {
          name: data.name,
        });
    
        displayRazorpay(order.data);
      };

  return (
    <div className="overlay">A
      <Zoom className="zoom-out" duration={500}>
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-fixed">
              <div id="head">
                <h5>{data.name}</h5>
                <div>
                  <AiOutlineClose
                    onClick={() => closeModal(false)}
                    className="closeres"
                  />
                </div>
              </div>
              <div className="info">
                <div>
                  <img src={data.image} className="img" alt="" />
                </div>

                <div className="quick-info">
                  <div>
                    <AiFillTrophy /> <h2>{data.prize}</h2>
                  </div>
                  <div>
                    <BsCalendar2DateFill /> <h2> {data.date}</h2>
                  </div>
                </div>
                <div className="contact-info">
                  <h2>ORGANIZER DETAILS:</h2>

                  {data.contactDetails.map((e, i) => (
                    <div key={i} className="organizer">
                      <div>
                        <BsFillPersonFill /> <span>{e.name}</span>
                      </div>
                      <div className="tele">
                        <BsFillTelephoneFill />{" "}
                        <span>
                          <a href={`tel:${e.phoneNumber}`}>{e.phoneNumber}</a>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-relative">
              <AiOutlineClose
                onClick={() => closeModal(false)}
                className="close"
              />

              <div>
                <h5>DESCRIPTION:</h5>
                <p>{data.desc}</p>
              </div>
              {data.rules && (
                <div className="">
                  <h5>RULES:</h5>
                  <p className=" ">
                    <ul>
                      {data.rules.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              {data.registrations && (
                <div className="">
                  <h5>REGISTRATION DETAILS:</h5>
                  <p className=" ">
                    <ul>
                      {data.registrations.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              {data.judgingCriteria && (
                <div className="">
                  <h5>JUDGING CRITERIA:</h5>
                  <p className="   ">
                    <ul className=" ">
                      {data.judgingCriteria.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}

              {data.format && (
                <div>
                  <h5>FORMAT:</h5>
                  {Object.keys(data.format).map((key, index) => {
                    return (
                      <div key={index} className="round">
                        {key && <h4>{key}</h4>}
                        <p>
                          <ul>
                            {data.format[key].map((value, index) => (
                              <li key={index}>{value}</li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {data.teamReq && (
                <div className="">
                  <h5>TEAM REQUIREMENTS:</h5>
                  <p className="   ">
                    <ul className=" ">
                      {data.teamReq.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              <div className="note">
                <p>
                  <span>NOTE:</span> Rules are subjected to changes.
                </p>
              </div>
              <div className="buttons">
                <div>
                  <a href={data.link}>
                    <button className="button-62">Download Rulebook</button>
                  </a>
                </div>
                <div>
                  {data.mode == "online" && visible && (
                    <button className="button-62" onClick={handleRegister}>
                      Click here to register
                    </button>
                  )}
                </div>
              </div>
              {drop && (
                <React.Fragment>
                  <div className="drop-container">
                    <h1
                      className="drop-head"
                      style={{ color: "rgba(250, 163, 76, 0.982)" }}
                    >
                      TEAM DETAILS
                    </h1>
                    <form className="sign-form">
                      {/* <input type="text" name="teamName" className="input-field" placeholder="Team Name" required onChange={(e)=>handleChange(e)}/> */}

                      {Object.keys(team).map((key, index) => {
                        return (
                          <input
                            type="text"
                            key={key}
                            name={key}
                            className="input-field"
                            placeholder={`Member ${index + 1}`}
                            required
                            onChange={handleChange}
                          />
                        );
                      })}
                    </form>
                    <div className="button-list">
                      {count < data.maxlimit ? (
                        <button
                          className="button-62"
                          onClick={(e) => increaseCount(e)}
                        >
                          Add Member
                        </button>
                      ) : (
                        <button className="button-62">Max limit reached</button>
                      )}
                      <button
                        className="button-62"
                        onClick={(e) => decreaseCount(e)}
                      >
                        Remove Member
                      </button>
                      <button
                        className="button-62"
                        id="rzp-button1"
                        onClick={(e) => proceedPay(e)}
                       
                      >
                        Proceed to Pay
                      </button>
                      {console.log(count)}
                    </div>
                  </div>
                  <div ref={bottomRef}></div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Modal;