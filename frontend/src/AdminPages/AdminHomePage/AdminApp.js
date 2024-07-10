import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "../AdminHomePage/AdminHomePage.jsx";
import AdminDashboard from "../AdminPanelPages/Dashboard/AdminDashboard.jsx";
import AdminDjs from "../AdminPanelPages/Djs/AdminDjs.jsx";
import AdminEvents from "../AdminPanelPages/Events/AdminEvents.jsx";
import AdminModels from "../AdminPanelPages/AdminModels/AdminModels.jsx";
import AdminPortfolio from "../AdminPanelPages/AdminPortfolio/AdminPortfolio.jsx";
import AdminSettings from "../AdminPanelPages/AdminSettings/AdminSettings.jsx";

function AdminApp() {
  return (
    <>
      <AdminHomePage />

      <Routes>
        <Route path="/admin-panel/dashboard" element={<AdminDashboard />} />
        <Route path="/admin-panel/djs" element={<AdminDjs />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin-panel/models" element={<AdminModels />} />
        <Route path="/admin-panel/portfolio" element={<AdminPortfolio />} />
        <Route path="/admin-panel/settings" element={<AdminSettings />} />
      </Routes>
    </>
  );
}

export default AdminApp;
