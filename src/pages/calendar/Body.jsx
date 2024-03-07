import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import "./style.css";
import React from "react";

const Body = ({ handledateClick, selectedDate, currentMonth }) => {
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(startMonth);
  const startDate = startOfWeek(startMonth);
  const endDate = endOfWeek(endMonth);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div
          style={{
            width: "90px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            border: "1px solid #000",
            cursor: "pointer",
          }}
          className={`${
            !isSameMonth(day, startMonth)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          onClick={() => handledateClick(parse(cloneDay))}
        >
          <span>{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {days}
      </div>
    );
    days = [];
  }
  return (
    <div
      style={{
        width: "700px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {rows}
    </div>
  );
};

export default Body;
