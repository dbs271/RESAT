import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Main = () => {
  return (
    <div>
      <div className="day">
        <h2>day 2</h2>
        <Link to={"/resat/day1"}>CountDown Timer</Link>
      </div>
      <div className="day">
        <h2>day 3</h2>
        <Link to={"/resat/day2"}>TodoList</Link>
      </div>
      <div className="day">
        <h2>day 4</h2>
        <Link to={"/resat/day3"}>calendar</Link>
      </div>
      <div className="day">
        <h2>day 6 </h2>
        <Link to={"/resat/day5"}>carousel</Link>
      </div>
      <div className="day">
        <h2>day 7 </h2>
        <Link to={"/resat/day6"}>carousel2</Link>
      </div>
      <div className="day">
        <h2>day 9</h2>
        <Link to={"/resat/day7"}>responsive Nav</Link>
      </div>
    </div>
  );
};

export default Main;
