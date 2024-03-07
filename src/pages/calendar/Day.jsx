import React from "react";

const Day = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < date.length; i++) {
    days.push(
      <div
        style={{
          border: "1px solid #000",
          width: "100px",
          height: "20px",
          background: "rgba(122, 238, 190, 0.5)",
        }}
        key={i}
      >
        {date[i]}
      </div>
    );
  }
  return (
    <div
      style={{
        width: "700px",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {days}
    </div>
  );
};

export default Day;
