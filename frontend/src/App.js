import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRegister from "./AdminPages/AdminRegister/Register";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Djs from "./Pages/Djs/Djs.jsx";
import Events from "./Pages/Events/Events.jsx";
import Models from "./Pages/Models/Models.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Djs" element={<Djs />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Models" element={<Models />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/admin-register" element={<AdminRegister />} />
    </Routes>
    <Footer />
  </>
  );
};

export default App;
