import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Main = () => {
  return (
    <div>
      <div className="day">
        <h2>challenge 1</h2>
        <Link to={"/resat/day1"}>CountDown Timer</Link>
      </div>
      <div className="day">
        <h2>challenge 2</h2>
        <Link to={"/resat/day2"}>TodoList</Link>
      </div>
      <div className="day">
        <h2>challenge 3</h2>
        <Link to={"/resat/day3"}>calendar</Link>
      </div>
      <div className="day">
        <h2>challenge 5 </h2>
        <Link to={"/resat/day5"}>carousel</Link>
      </div>
    </div>
  );
};

export default Main;
