import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Main = () => {
  return (
    <div>
      <div className="day">
        <h2>Day 1</h2>
        <Link to={"/resat/day1"}>CountDown Timer</Link>
      </div>
      <div className="day">
        <h2>Day 2</h2>
        <Link to={"/resat/day2"}>TodoList</Link>
      </div>
      <div className="day">
        <h2>Day 3</h2>
        <Link to={"/resat/day3"}>calendar</Link>
      </div>
    </div>
  );
};

export default Main;
