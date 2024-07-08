import React from 'react'

function Navbar() {
  return (
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/djs">DJs</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/models">Models</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
    </ul>
</nav>
  )
}

export default Navbar