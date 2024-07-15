import React from "react";
import "./styles.css";
import Topbar from "./Topbar";
import DevHomePage from "../DevHomePage";

function DeveloperHomePage({ children }) {
  return (
    <>
      <div className="developerHomePage">
        <Topbar />
        <div>{children ? children : <DevHomePage />}</div>
      </div>
    </>
  );
}

export default DeveloperHomePage;
