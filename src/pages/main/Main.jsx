import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Main = () => {
  return (
    <div>
      <div className="day">
        <h2>Day 1</h2>
        <Link to={"/day1"}>CountDown Timer</Link>
      </div>
    </div>
  );
};

export default Main;
