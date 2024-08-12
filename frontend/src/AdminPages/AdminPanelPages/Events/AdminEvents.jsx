import React, { useState } from "react";
import "./AdminEvents.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminEvents() {
  // Örnek etkinlik verisi
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingEvent(null);
    setNewEvent({
      title: "",
      date: "",
      location: "",
    });
  };

  const addOrUpdateEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location) {
      if (editingEvent) {
        setEvents(
          events.map((event) =>
            event.id === editingEvent.id ? { ...newEvent, id: editingEvent.id } : event
          )
        );
        toast.success("Event updated successfully!");
      } else {
        setEvents([...events, { ...newEvent, id: events.length + 1 }]);
        toast.success("Event added successfully!");
      }
      closeForm();
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const editEvent = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setShowForm(true);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    toast.success("Event deleted successfully!");
  };

  return (
    <div className="admin-events-container">
      <ToastContainer />
      {/* Event Form */}
      <div className={`event-form-container ${showForm ? "active" : ""}`}>
        <div className="event-form">
          <div className="close-form-btn" onClick={closeForm}>
            X
          </div>
          <h2>{editingEvent ? "Update Event" : "Add New Event"}</h2>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            placeholder="Event Date"
            value={newEvent.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={newEvent.location}
            onChange={handleInputChange}
          />
          <button className="add-btn" onClick={addOrUpdateEvent}>
            {editingEvent ? "Update Event" : "Add Event"}
          </button>
        </div>
      </div>
      {/* Event List */}
      <div className="event-list">
        <h2>Event List</h2>
        <ul className="grid-container">
          {events.map((event) => (
            <li key={event.id} className="event-list-item">
              <h3>{event.title}</h3>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <button className="update-btn" onClick={() => editEvent(event)}>
                Update
              </button>
              <button className="delete-btn" onClick={() => deleteEvent(event.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Add Event Button */}
      <button className="add-btn" onClick={toggleForm}>
        Add New Event
      </button>
    </div>
  );
}

export default AdminEvents;
