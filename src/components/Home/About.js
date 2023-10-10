import React from 'react';
import Img1 from '../../images/sahlogobg.png';
import Img2 from '../../images/chal.png';
import './Home.css';

function About() {
  return (
    <div className="container ">
      <h1 className='text-center mt-3 mb-5 fw-bold'>About</h1>
      <div className='row align-items-center'>
        <div className='col-md-3 col-sm-12 text-center mb-4'>
          <img src={Img1} alt='Left Image' className='img-fluid rounded' style={{ maxHeight: '22rem', margin: '0 auto' }} />
        </div>
        <div className='col-md-6 col-sm-12 res'>
          <div className='content-container tilted-container p-3 text-justify'>
            <h2 className='fw-bold text-sm' style={{ fontSize: '1.2em' }}>
              <span className='text-grad'>Aerophilia</span> is a National level Techno-Cultural fest, conducted at Sahyadri College of Engineering and Management in association with <span className='text-grad'>ECE Department</span> for students aspiring to be extraordinary. It’s a 3-day event spanning the weekend with an exciting competition involving <span className='text-grad'>Aeromodelling, Drone race, RC Bot events, </span>and all things out of this world! There are also fun-filled activities and Hackathons. The motive behind organizing such an event is to spread and teach the young talented minds to explore new areas of <span className='text-grad'>technology</span> and <span className='text-grad'>aeromodelling</span> to foster the nation's development.
              <br />
              <span className='text-grad'>Sahyadri College of Engineering and Management (SCEM)</span>, Mangaluru, was established in 2007. It is one of the premier technological institutions incubating quality and value-based education through the innovative teaching-learning process for the holistic development of the students. The In-house Industries, Startups, and Launchpads are the mainstay of the College. The institute comprises around 250 well-qualified and experienced Faculty and Staff members to mentor and guides young talents. Sahyadri promotes the idea of <span className='text-grad'>Project-Based</span> Learning through various activities and initiatives in association with various in-house industries, which helps the students to improve their expertise.
            </h2>
          </div>

        </div>
        <div className='col-md-3 col-sm-12 text-center mb-4'>
          <img src={Img2} alt='Right Image' className='img-fluid rounded' style={{ maxHeight: '22rem', margin: '0 auto' }} />
        </div>
      </div>
      <div className="row mt-5 justify-content-between">
  <div className="col-md-6">
    <div className="ml-2 mt-3 p-2 mb-md-5 mb-sm-3 fs-4 text-white content-container">
      <span className="text-grad fw-bold">Venue:</span> Sahyadri College of Engineering And Management
    </div>
  </div>
  <div className="col-md-4">
    <div className="mr-2 mt-3 p-2 mb-md-5 mb-sm-3 fs-4 text-white  content-container">
      <span className="text-grad fw-bold">Schedule:</span> 8 and 9th December, 2023
    </div>
  </div>
</div>

    </div>
  );
}

export default About;