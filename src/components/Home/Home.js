import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Aero from '../../images/logo.png';
import Navbar from "../Navbar/Navbar";
import AboutMe from './About';
import Cards from './card';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const targetDate = new Date('2023-12-31T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (timeRemaining < 0) {
        clearInterval(interval);
        // You can perform any action when the countdown reaches zero here
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      <Navbar />
      <div className="cursor-animation" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>

      <Parallax strength={500} bgImage={require('../../images/earthpic.jpg')} className="parallax-section" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
        <div className="container vh-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="text-center col-md-6">
              <div>
                <img src={Aero} className="img-fluid d-block" alt="Not found" />
              </div>
              <div className="fw-bold text-white">
                <div className="title  fw-bold">Sahyadri's National Level Technical Fest</div>
              </div>
              <div className="text-white">
                <div className="row align-items-center">
                  <div className="col-9">
                    <div className="mt-5 fw-bold" style={{ fontSize: '1.4rem' }}>
                      Watch Aerophilia 2021
                      <FontAwesomeIcon icon={faPlayCircle} className='px-3' />
                    </div>
                    <div>
                      <button className="glow-on-hover p-2 mt-3 fw-bold">Register Now! </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* <div className="col-md-6 text-center">
              <div className="p-5">
                <div className='title text-white fw-bold ms-4' style={{ fontFamily: 'Montserrat, sans-serif' }}>Starting in</div>
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <span className="countdown-number">{countdown.days}</span>
                    <span className="countdown-label">Days</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">{countdown.hours}</span>
                    <span className="countdown-label">Hours</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">{countdown.minutes}</span>
                    <span className="countdown-label">Minutes</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">{countdown.seconds}</span>
                    <span className="countdown-label">Seconds</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 text-center">
              <div className="p-5">
                {/* Countdown timer in a row with 3D style */}
                <div className='title text-white fw-bold' style={{ fontFamily: 'Montserrat, sans-serif' }}>Starting in</div>
                <div className="countdown-timer m-2">
                  <div className="countdown-item m-3 p-2 d-flex align-items-center">
                    <span className="countdown-number" style={{ fontSize: '2vw' }}>{countdown.days}</span>
                    <span className="countdown-label ms-2" style={{ fontSize: '2vw' }}>Days</span>
                  </div>
                  <div className="countdown-item m-3 p-2 d-flex align-items-center">
                    <span className="countdown-number" style={{ fontSize: '2vw' }}>{countdown.hours}</span>
                    <span className="countdown-label ms-2" style={{ fontSize: '2vw' }}>Hours</span>
                  </div>
                  <div className="countdown-item m-3 p-2 d-flex align-items-center">
                    <span className="countdown-number" style={{ fontSize: '2vw' }}>{countdown.minutes}</span>
                    <span className="countdown-label ms-2" style={{ fontSize: '2vw' }}>Mins</span>
                  </div>
                  <div className="countdown-item m-3 p-2 d-flex align-items-center">
                    <span className="countdown-number" style={{ fontSize: '2vw' }}>{countdown.seconds}</span>
                    <span className="countdown-label ms-2" style={{ fontSize: '2vw' }}>Secs</span>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </Parallax>
      <Parallax strength={500} bgImage={require('../../images/spac2.jpg')} className="parallax-section " style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
        <div>
          <Cards />
        </div>
      </Parallax>
      <Parallax strength={500} bgImage={require('../../images/sah.jpg')} className="parallax-section" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
        <div>
          <AboutMe />
        </div>
      </Parallax>
      <Parallax strength={700} bgImage={require('../../images/sah.jpg')} className="parallax-section" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      <div className='vh-20 d-flex justify-content-center align-items-center mb-5 mt-3' style={{ backgroundImage: 'url(../../images/sahym.jpg)', backgroundSize: 'cover' }}>
  <div className='text-center p-4 grad content-container'>
    <h1 className='fw-bold fs-4'>Download RuleBook</h1>
    <h1 className='fw-bold fs-4'>Details and Schedule of Aerophilia 2023</h1>
    <button className='btn btn-sm text-white glow-on-hover fw-bold'>
      RuleBook
    </button>
  </div>
</div>


      </Parallax>
      <Footer/>



    </div>
  );
};

export default Home;