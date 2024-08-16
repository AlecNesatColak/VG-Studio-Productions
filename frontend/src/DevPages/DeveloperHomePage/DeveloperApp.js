import React from "react";
import { Routes, Route } from "react-router-dom";
import DeveloperHomePage from "../DeveloperHomePage/DeveloperHomePage";
import ProtectedRoute from "../ProtectedRoute";
import DeveloperLogin from "../DeveloperLogin/DeveloperLogin";
import DeveloperPage from "../DevHomePage"

function DeveloperApp() {
  return (
    <Routes>
      <Route path="/developer-login" element={<DeveloperLogin />} />
      <Route
        path="/developer-home"
        element={
          <ProtectedRoute>
            <DeveloperHomePage>
              <DeveloperPage />
            </DeveloperHomePage>
          </ProtectedRoute>
        }
      />
      {/* Add other routes here */}
    </Routes>
  );
}

export default DeveloperApp;
