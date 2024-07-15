import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AdminApp from "../src/AdminPages/AdminHomePage/AdminApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DeveloperApp from "./DevPages/DeveloperHomePage/DeveloperHomePage";

const path = window.location.pathname;

if (path.startsWith("/admin-panel")) {
  ReactDOM.render(
    <BrowserRouter>
      <AdminApp />
    </BrowserRouter>,
    document.getElementById("root")
  );
} else if (path.startsWith("/developer-home")) {
  ReactDOM.render(
    <BrowserRouter>
      <DeveloperApp />
    </BrowserRouter>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
