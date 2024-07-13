import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageRouter from "./router/HomePageRouter.js";
import HomePageLayout from "./components/HomePageLayout.jsx";

const App = () => {
  return (
    <>
      <HomePageLayout>
        <Routes>
        {/*  If you want to add a new page, you must add it from within the router  */}
        {HomePageRouter.map((item, index) => {
          return <Route key={index} {...item} />;
        })}
      </Routes>
      </HomePageLayout>
      
      
    </>
  );
};

export default App;
