import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminApp from "./AdminPages/AdminHomePage/AdminApp";
import DeveloperApp from "./DevPages/DeveloperHomePage/DeveloperApp";
import Login from "./AdminPages/AdminLogin/Login.jsx";

const path = window.location.pathname;

const Root = () => {
  if (path.startsWith("/admin")) {
    return (
      <Routes>
        <Route path="/admin-login" element={<Login />} />
        <Route path="*" element={<AdminApp />} />
      </Routes>
    );
  }

  if (path.startsWith("/developer")) {
    return (
      <Routes>
        <Route path="*" element={<DeveloperApp />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
