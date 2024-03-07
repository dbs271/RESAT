import { format } from "date-fns";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Header = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div
      style={{
        height: "50px",
      }}
    >
      <div
        style={{
          width: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IoIosArrowBack onClick={prevMonth} style={{ cursor: "pointer" }} />
        <span style={{ display: "flex", gap: "5px" }}>
          {format(currentMonth, "yyyy")}년
          <span>{format(currentMonth, "M")}월</span>
        </span>
        <IoIosArrowForward onClick={nextMonth} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
