import React from 'react';
import './style.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function AdminHomePage({ children }) {
  return (
    <>
     
    <div className="adminHomePage">
      
      <div className="layout">
        <div className="content">{children}</div>
      </div>
       <Sidebar />
       <Topbar />
    </div>
    </>
    
  );
}

export default AdminHomePage;
