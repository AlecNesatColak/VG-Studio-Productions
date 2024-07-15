import React from "react";
import { Routes, Route } from "react-router-dom";
import DeveloperHomePage from "../DeveloperHomePage/DeveloperHomePage";
import DeveloperRouter from "../DeveloperRouter/DeveloperRouter";

function DeveloperApp() {
  return (
    <>
      <DeveloperHomePage>
        <Routes>
          {/*  If you want to add a new page, you must add it from within the router  */}
          {DeveloperRouter.map((item, index) => {
            return <Route key={index} {...item} />;
          })}
        </Routes>
      </DeveloperHomePage>
    </>
  );
}

export default DeveloperApp;
