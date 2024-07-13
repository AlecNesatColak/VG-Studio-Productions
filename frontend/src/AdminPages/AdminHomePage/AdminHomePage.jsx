import React from 'react';
import './style.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function AdminHomePage({ children }) {
  return (
    <>
     
    <div className="adminHomePage">
       <Sidebar />
      <Topbar />
      <div className="layout">
        <div className="content">{children}</div>
      </div>
    </div>
    </>
    
  );
}

export default AdminHomePage;
