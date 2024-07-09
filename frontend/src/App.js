import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRegister from "./AdminPages/AdminRegister/Register";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Example home route */}
        <Route path="/admin-register" element={<AdminRegister />} />
        {/* Route for AdminRegister component */}
      </Routes>
    </>
  );
};

export default App;
