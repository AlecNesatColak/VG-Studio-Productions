import React, { useState } from 'react';

function AdminEvents() {
  // Örnek etkinlik verisi
  const [events, setEvents] = useState([
    { id: 1, title: 'Summer Party', date: '2024-08-15', location: 'Beach Resort' },
    { id: 2, title: 'Tech Conference', date: '2024-09-20', location: 'Convention Center' },
    { id: 3, title: 'Product Launch', date: '2024-10-10', location: 'Headquarters' },
  ]);

  return (
    <div className="admin-events">
      <h2>Admin Events</h2>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminEvents;
