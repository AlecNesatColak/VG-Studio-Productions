import React from 'react'

function Dashboard() {
  return (
    <div className="dashboard">
    <div className="stats">
      <div className="stat">
        <h3>10</h3>
        <p>New DJs</p>
      </div>
      <div className="stat">
        <h3>5</h3>
        <p>Upcoming Events</p>
      </div>
      <div className="stat">
        <h3>20</h3>
        <p>Models</p>
      </div>
      <div className="stat">
        <h3>15</h3>
        <p>Portfolio Items</p>
      </div>
    </div>
    {/* Additional dashboard content can go here */}
  </div>
  )
}

export default Dashboard