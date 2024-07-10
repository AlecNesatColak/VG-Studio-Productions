import React from 'react'
import '../AdminHomePage/style.css';
import Sidebar from '../AdminHomePage/Sidebar';
import Topbar from '../AdminHomePage/Topbar';



function AdminHomePage() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
      
      </div>
    </div>
  )
}

export default AdminHomePage