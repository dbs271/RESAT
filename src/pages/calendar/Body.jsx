import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import "./style.css";
import React from "react";
import Memo from "./Memo";

const Body = ({
  handledateClick,
  selectedDate,
  currentMonth,
  memo,
  setMemo,
  memos,
  saveMemo,
}) => {
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
          onClick={() => handledateClick(format(cloneDay, "yyyy-MM-dd"))}
        >
          {memos[format(cloneDay, "yyyy-MM-dd")] && (
            <div
              style={{
                border: "1px solid #588CDF",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                background: "#588CDF",
                position: "absolute",
                marginTop: "2px",
              }}
            ></div>
          )}
          <span style={{ position: "relative" }}>{formattedDate}</span>
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
        position: "relative",
      }}
    >
      {rows}
      {memo && (
        <Memo
          selectedDate={selectedDate}
          memos={memos}
          saveMemo={saveMemo}
          setMemo={setMemo}
          memo={memo}
        />
      )}
    </div>
  );
};

export default Body;
