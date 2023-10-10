import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from './Modal'; // Import the Modal component
import "./EventCarousel.css"; // make sure to import your CSS

const EventCarousel = ({ events = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [centerPercentage, setCenterPercentage] = useState(33); // state for centerSlidePercentage
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event

  // a function to handle window resize
  const updateCenterPercentage = () => {
    if (window.innerWidth < 768) {
      setCenterPercentage(100); // show 1 card for small devices
    } else if (window.innerWidth < 992) {
      setCenterPercentage(50); // show 2 cards for medium devices
    } else {
      setCenterPercentage(33); // show 3 cards for large devices
    }
  };

  // on component mount, set the event listener for window resizing
  useEffect(() => {
    updateCenterPercentage();
    window.addEventListener("resize", updateCenterPercentage);
    return () => window.removeEventListener("resize", updateCenterPercentage);
  }, []);

  const handleSlideChange = (index) => setActiveIndex(index);

  // Function to open the modal with selected event data
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  if (!events.length) return null;

  return (
    <Container fluid className="caro-main">
      <Row className="h-100 m-1 justify-content-center align-items-center ">
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <div className="image-conatiner p-1 m-1">
            <img
              src="https://w0.peakpx.com/wallpaper/333/850/HD-wallpaper-kokushibo-art-fictional-character-anime-thumbnail.jpg"
              alt="Test"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Col>
        <Col xs={12} sm={10} md={10} lg={10} xl={8}>
          <Carousel
            autoPlay
            interval={3000}
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={centerPercentage}
            onChange={handleSlideChange}
          >
            {events.map((event, i) => (
              <div
                className={`card-wrapper text-center ${
                  i === activeIndex ? "active" : ""
                }`}
                key={i}
                tabIndex={i + 1}
                aria-label={`event-card-${i + 1}`}
              >
              <Card className="w-100" style={{
background: '#CE2F6A',
background:' linear-gradient(135deg, #CE2F6A, #EA1932)' }}>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                      
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={event.image}
                      alt={event.smallDesc}
                      aria-label={event.smallDesc}
                      className="p-1"
                      style={{
                        width: "80%",
                        maxHeight: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                  <Card.Body className="caro-body">
                    <Card.Title>{event.smallDesc}</Card.Title>
                    <Card.Subtitle>{event.type}</Card.Subtitle>
                    <Card.Text>{`${event.date} at ${event.time}`}</Card.Text>
                    <Button className="glow-on-hover button" variant="primary" onClick={() => openModal(event)}>Details</Button> {/* Open modal on click */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Render the Modal component if a selected event is available */}
      {isModalOpen && selectedEvent && (
        <Modal data={selectedEvent} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default EventCarousel;