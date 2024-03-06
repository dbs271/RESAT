import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

const MainLayout = () => {
  return (
    <div>
      <h1 className="title">RESAT CHALLENGE</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
