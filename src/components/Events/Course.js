import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import { eventData } from "./eventData";
// Import the eventData

function Course() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to open the modal with selected event data
  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {eventData.map((event, index) => (
          <li key={index}>
            <button onClick={() => openModal(event)}>View Details</button>
            {event.name}
          </li>
        ))}
      </ul>

      {/* Render the Modal component if a selected event is available */}
      {modalOpen && selectedEvent && (
        <Modal data={selectedEvent} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Course;