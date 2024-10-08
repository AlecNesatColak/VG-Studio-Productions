import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/hero";
import Features1 from "./components/features1";
import CTA from "./components/cta";
import Features2 from "./components/features2";
import Pricing from "./components/pricing";
import Steps from "./components/steps";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import "./style.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <Helmet>
          <title>VG Studio Productions!!</title>
        </Helmet>
        <Hero></Hero>
        <Features1></Features1>
        {/* <Testimonial></Testimonial> */}
        <Contact></Contact>
      </div>
    </>
  );
}

export default Home;
