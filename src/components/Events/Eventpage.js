import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import EventCarousel from "./EventCarousel";
import "./EventPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { eventData } from "./eventData";
import Modal from "./Modal";
import Footer from "../Footer/Footer";
// import SkyDive from "../../images/SkyDive.webp"

const AllEventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedDay, setSelectedDay] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const handleCategoryHover = (category) => {
    if (category !== "results") {
      setSelectedCategory(category);
      setSearchTerm(""); // Clear the search term
      setShowResults(false); // Hide search results when hovering sub-nav
      setSelectedDay("all"); // Reset the selectedDay to its initial value (e.g., 'all' or 1 or 2)
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      const filteredEvents = eventData.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredEvents);
      setSelectedCategory("results"); // Set a new category 'results'
      setShowResults(true);
    }
  };

  const handleSubNavClick = () => {
    if (showResults) {
      setShowResults(false);
      setSelectedCategory("all");
      setSearchTerm(""); // Reset the search term
    } else {
      handleSearch();
    }
  };

  const categoryHeadings = {
    all: "All Events",
    Technical: "Technical",
    Cultural: "Cultural",
    attraction: "Attraction Events",
    results: "Results", // New category for search results
    // Add more categories as needed
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    const categories = Object.keys(categoryHeadings);
    const currentIndex = categories.indexOf(selectedCategory);

    if (key === "ArrowRight") {
      const nextIndex =
        currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
      setSelectedCategory(categories[nextIndex]);
    } else if (key === "ArrowLeft") {
      const previousIndex =
        currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
      setSelectedCategory(categories[previousIndex]);
    } else if (key === "Enter") {
      handleSubNavClick(); // Call the search action function on Enter key press
    }
  };

  const handleDayFilter = (day) => {
    // Handle day filtering when a "Day" button is clicked
    setSelectedCategory("all");
    setSelectedDay(day);
  };

  const displayedEvents = (
    selectedCategory !== "all"
      ? eventData.filter((event) => event.type === selectedCategory)
      : eventData
  )
    .filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((event) => selectedDay === "all" || event.day === selectedDay);

  return (
    <>
      <Navbar />

      <div className="container-fluid all-events-page bg-dark">
        <div className="text-center " id="caro">
          <EventCarousel events={eventData} />
        </div>
        <br />
        <br />

        <Container fluid>
          <Row >
            {/* Sub-navbar */}
            <Col xs={12} sm={6} md={4} lg={4} xl={6}>
              <div
                className={`sub-navbar d-flex flex-column  align-items-center py-3 m-3 h-100 ${
                  selectedCategory ? "glow-border" : ""
                }`}
                onKeyDown={handleKeyDown}
                role="navigation"
                tabIndex="0"
              >
                <ul className="nav flex-column text-center">
                  {Object.keys(categoryHeadings).map((category) => (
                    <li className="nav-item" key={category}>
                      <button
                        className={`nav-link category-button btn btn-link text-light ${
                          selectedCategory === category ? "active" : ""
                        }`}
                        onClick={() => handleCategoryHover(category)}
                        style={{ marginBottom: "10px", width: "100%" }}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Search bar */}
            <Col
              xs={12}
              sm={6}
              md={8}
              lg={8}
              xl={6}
              className="right-container glow-border"
            >
              <div className="d-flex flex-column align-items-center  py-3 m-3 search-bar-container ">
                <div className="input-group custom-search mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Search by event name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSubNavClick(); // Call the search action function on Enter key press
                      }
                    }}
                  />
                  <div className="input-group-append">
                    <button
                      className={`btn custom-button ${
                        showResults ? "btn-danger" : "btn-primary"
                      }`}
                      onClick={handleSubNavClick}
                    >
                      {showResults ? (
                        <i className="fa fa-times"></i>
                      ) : (
                        <i className="fa fa-search"></i>
                      )}
                    </button>
                  </div>
                </div>

                {/* Day navigation */}
                <Col xs={12} sm={6} md={4} lg={4} xl={6}>
                  <div
                    className={`d-flex flex-column  align-items-center py-3 m-3 ${
                      selectedDay ? "glow-border" : ""
                    }`}
                    onKeyDown={handleKeyDown}
                    role="navigation"
                    tabIndex="0"
                  >
                    <ul className="nav flex-column text-center">
                      <li className="nav-item">
                        <button
                          className={`nav-link category-button btn btn-link text-light ${
                            selectedDay === "1" ? "active" : ""
                          }`}
                          onClick={() => handleDayFilter("1")}
                          style={{ marginBottom: "10px", width: "100%" }}
                        >
                          Day 1
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link category-button btn btn-link text-light ${
                            selectedDay === "2" ? "active" : ""
                          }`}
                          onClick={() => handleDayFilter("2")}
                          style={{ marginBottom: "10px", width: "100%" }}
                        >
                          Day 2
                        </button>
                      </li>
                    </ul>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Show heading for the category or search results */}
        <br/><br/>
        <div className="heading-class">
          <h1 className="text-center m-1 text-info">
            {showResults
              ? searchResults.length > 0
                ? categoryHeadings[selectedCategory]
                : "No such event"
              : selectedDay === "1"
              ? "Day 1 Events"
              : selectedDay === "2"
              ? "Day 2 Events"
              : categoryHeadings[selectedCategory]}
          </h1>
        </div>

        {/* Render search results or events */}
        <br/>
        <div className="col-md-12">
          <div className="mx-1 mx-md-0">
            <div className="row justify-content-center">
              {(showResults ? searchResults : displayedEvents).map(
                (event, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-3 col-sm-6 col-12 mx-5 rounded my-3 text-center event-card glow-border"
                  >
                    <div className="card text-light p-2 h-100" style={{
                        width: "100%",
                        maxHeight: "100%",
                        height:"250px",
                        objectFit: "fill",
                        background:'rgb(255, 95, 31)'
                      }}>
                      <img
                        src={event.image}
                        alt="Event"
                        className="card-img-top p-1"
                        style={{
                          width: "100%",
                          height:"200px",
                          objectFit: "fill",
                        }}
                      />
                      <div className="card-body ">
                        <h5 className="card-title text-left">{event.name}</h5>
                        <p className="card-text">
                          {event.date} at {event.time}
                        </p>
                        <button
                          className="btn glow-on-hover"
                          onClick={() => openModal(event)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {isModalOpen && selectedEvent && (
          <Modal data={selectedEvent} closeModal={closeModal} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllEventsPage;
