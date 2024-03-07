import { addMonths, subMonths } from "date-fns";
import React from "react";
import { useState } from "react";
import Body from "./Body";
import Day from "./Day";
import Header from "./Header";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [memo, setMemo] = useState(false);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handledateClick = (day) => {
    setSelectedDate(day);
    setMemo(!memo);
  };

  return (
    <div
      className="calendar"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />

      <Day />

      <Body
        handledateClick={handledateClick}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        memo={memo}
        setMemo={setMemo}
      />
    </div>
  );
};

export default Calendar;
