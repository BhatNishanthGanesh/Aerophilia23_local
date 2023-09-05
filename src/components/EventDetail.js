import "./Login.css";
import skydive from "./SkyDive.webp";
import Navbar from "./Navbar";
import close from "./close-icon.png";

import Icon_close from "./Icon_close.svg.png";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillTrophyFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

const eventDetailsArray = [
  {
    title: "SKY DIVE",
    imageSrc: skydive,
    details: ["75,000", "12th Nov", "9.00 AM"],
    organizerDetails: "ORGANISER DETAILS",
    description: `
      Team Challengers of Sahyadri College of Engineering and Management, Mangalore invites all university students to participate in Aerophilia ‘22. The contest will provide a real-world aircraft design experience for engineering students by allowing them to validate their analytical skills. Student teams will design, fabricate, and demonstrate the flight capabilities of an unmanned, electric-powered, radio-controlled aircraft that can best meet the specified mission profile. The goal is a balanced design possessing good demonstrated flight handling qualities, and practical and affordable manufacturing requirements.
    `,
    rules: [
      "The maximum wingspan allowed is 1.4 meters.",
      "The airplane must have a specific bay area for housing the internal payload.",
      "The internal payload must be secured in such a way that it must not be able to move and should stay perfectly in place.",
      // Add more rules as needed
    ],
    registrationDetails: [
      "On spot registration is not available for this event",
      "Registeration fee: ₹2,500 per team",
    ],
    teamRequirements:
      "There are no specific requirements for the team or the team members.",
    format:
      "There are no specific requirements for the team or the team members.",
    judgingCriteria: `
      Reports will be scored on a 50-point basis following the guidelines outlined below. The design report must include the following: Executive Summary (5 points), Management Summary (5 points, Conceptual Design Approach (10 points), Preliminary Design (10 points), Detail Design (10 points), Manufacturing Plan (5 points), Bibliography (5 points) Each team's overall score will be computed from their Design Report Score and Total Mission Score using the following formula: SCORE = Design Report Score * Total Mission Score where Total misssion score = M1+M2+M3
    `,
    contact: ["Babith", "8217678105"],
  },
];

// const EventDetails = () => {
//   return (
//     <>
//       <Navbar />

//       <div className="frame">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-1"></div>
//             <div className="col-md-10 frame-content mt-5">
//               <div className="desc">
//                 <div className="title">
//                   <h2>SKY DIVE</h2>
//                 </div>
//                 <img src={skydive} alt="Error"></img>
//                 <div className="details">

//                   <ul>
//                     <li>75,000</li>
//                     <li>12th Nov</li>
//                     <li>9.00 AM</li>
//                     <br></br>
//                     <h5>ORGANISER DETAILS</h5>
//                   </ul>
//                 </div>
//               </div>

//               <div className="rules scrollable-rules">
//                 <div className="description">
//                   <div className="close-flex">
//                     <h2>DESCRIPTION</h2>
//                     <img src={Icon_close} alt="nothing"></img>
//                   </div>
//                   <p>
//                     Team Challengers of Sahyadri College of Engineering and
//                     Management, Mangalore invites all university students to
//                     participate in Aerophilia ‘22. The contest will provide a
//                     real-world aircraft design experience for engineering
//                     students by allowing them to validate their analytical
//                     skills.Student teams will design, fabricate, and demonstrate
//                     the flight capabilities of an unmanned, electric-powered,
//                     radio-controlled aircraft that can best meet the specified
//                     mission profile. The goal is a balanced design possessing
//                     good demonstrated flight handling qualities, and practical
//                     and affordable manufacturing requirements.
//                   </p>

//                   <h2>RULES</h2>
//                   <ul>
//                     <li>The maximum wingspan allowed is 1.4 meters.</li>
//                     <li>The airplane must have a specific bay area for housing the internal payload.</li>
//                     <li>The internal payload must be secured in such a way that it must not be able to move and should stay perfectly in place.</li>
//                     <li>The Internal payload must be placed only in the given orientation, as mentioned in the Mission and Vehicle Design section of the problem statement.</li>
//                     <li>If it is found that the airplane is not able to secure the internal payload as mentioned above, then the team will be disqualified.</li>
//                     <li>The external payload must be housed outside the aircraft only, and the airplane must have a release mechanism for the same, to release it during mission 3.</li>
//                     <li>If it is found that the airplane is not able to secure the external payload in a manner which is not convincing enough for the organizers, then the team will be disqualified for human safety purposes.</li>
//                     <li>All vehicles will undergo a technical inspection by a designated contest tech inspector before being allowed to make any competition flight. All the decisions taken by the Tech inspector will be considered final.</li>

//                   </ul>
//                   <h2>REGISTRATION DETAILS</h2>
//                   <ul>
//                     <li>On spot registration is not available for this event</li>
//                     <li>Registeration fee: ₹2,500 per team</li>
//                   </ul>
//                   <h2>TEAM REQUIREMENTS:</h2>
//                   <p>
//                     There are no specific requirements for the team or the team
//                     members.
//                   </p>
//                   <h2>FORMAT:</h2>
//                   <p>
//                     There are no specific requirements for the team or the team
//                     members.
//                   </p>
//                   <h2>JUDGING CRITERIA</h2>
//                   <p>
//                     Reports will be scored on a 50-point basis following the
//                     guidelines outli+
//                     ned below. The design report must include
//                     the following: Executive Summary (5 points),Management
//                     Summary (5 points, Conceptual Design Approach (10 points),
//                     Preliminary Design (10 points), Detail Design (10 points),
//                     Manufacturing Plan (5 points), Bibliography (5 points) Each
//                     team's overall score will be computed from their Design
//                     Report Score and Total Mission Score using the following
//                     formula:SCORE = Design Report Score * Total Mission Score
//                     where Total misssion score= M1+M2+M3
//                   </p>
//                   <button type="button" class="btn btn-warning m-2">Download Rulebook</button>
//                   <button type="button" class="btn btn-warning m-2">Register</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-1"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const EventDetails = () => {
  return (
    <>
      <Navbar />

      {eventDetailsArray.map((event, index) => (
        <div className="frame" key={index}>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 frame-content mt-5">
                <div className="desc">
                  <div className="title">
                    <h2>{event.title}</h2>
                  </div>
                  <img src={event.imageSrc} alt="Error" />
                  <div className="details">
                    <ul>
                      {/* {event.details.map((detail, detailIndex) => (
                        
                        <li key={detailIndex}>{detail}</li>
                      ))} */}
                      <BsFillTrophyFill class="event-icon" /> {event.details[0]}
                      <br />
                      <BsFillCalendarCheckFill class="event-icon" />{" "}
                      {event.details[1]}
                      <br />
                      <BsFillClockFill class="event-icon" /> {event.details[2]}
                      <br />
                      <br />
                      {/* <BsFillTrophyFill/>
                      <br />
                      <BsFillCalendarCheckFill/>
                      <br />
                      <BsFillClockFill/> */}
                      <h5>{event.organizerDetails}</h5>
                      <BsFillPersonFill class="event-icon" /> {event.contact[0]}
                      <br />
                      <IoLogoWhatsapp class="event-icon" /> {event.contact[1]}
                    </ul>
                  </div>
                </div>
               
                <div className="rules scrollable-rules">
                  <div className="description">
                    <div className="close-flex">
                      <h2>DESCRIPTION</h2>
                      <img src={Icon_close} alt="nothing" id="close" />
                    </div>
                    <p>{event.description}</p>

                    <h2>RULES</h2>
                    <ul>
                      {event.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex}>{rule}</li>
                      ))}
                    </ul>

                    <h2>REGISTRATION DETAILS</h2>
                    <ul>
                      {event.registrationDetails.map(
                        (regDetail, regDetailIndex) => (
                          <li key={regDetailIndex}>{regDetail}</li>
                        )
                      )}
                    </ul>

                    <h2>TEAM REQUIREMENTS:</h2>
                    <p>{event.teamRequirements}</p>

                    <h2>FORMAT:</h2>
                    <p>{event.format}</p>

                    <h2>JUDGING CRITERIA</h2>
                    <p>{event.judgingCriteria}</p>

                    <button type="button" className="btn  m-2 button-3">
                      Download Rulebook
                    </button>
                    <button type="button" className="btn m-2 button-3">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventDetails;
