import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AdminApp from "../src/AdminPages/AdminHomePage/AdminApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const path = window.location.pathname;

if (path.startsWith("/admin-panel")) {
  ReactDOM.render(
    <BrowserRouter>
      <AdminApp />
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
