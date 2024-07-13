import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import AdminRouter from "../AdminRouter/AdminRouter";

function AdminApp() {
  return (
    <>
       <AdminHomePage>
        <Routes>
        {/*  If you want to add a new page, you must add it from within the router  */}
        {AdminRouter.map((item, index) => {
          return <Route key={index} {...item} />;
        })}
      </Routes>
       </AdminHomePage>
       

   
    </>
  );
}

export default AdminApp;
