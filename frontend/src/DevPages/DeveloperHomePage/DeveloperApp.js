import React from "react";
import { Routes, Route } from "react-router-dom";
import DeveloperHomePage from "../DeveloperHomePage/DeveloperHomePage";
import DeveloperRouter from "../DeveloperRouter/DeveloperRouter";
import AuthenticatedRoute from "../AuthenticatedRoute"; // Import the AuthenticatedRoute component

function DeveloperApp() {
  return (
    <>
      <Routes>
        {DeveloperRouter.map((item, index) => (
          <Route key={index} {...item} />
        ))}
        <Route
          path="/developer-home"
          element={
            <AuthenticatedRoute>
              <DeveloperHomePage />
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default DeveloperApp;
