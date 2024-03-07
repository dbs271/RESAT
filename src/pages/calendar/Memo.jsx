import React, { useState } from "react";

const Memo = ({ selectedDate }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        border: "1px solid #000",
        position: "absolute",
        right: "-350px",
        background: "#f2f2bf",
        padding: "10px",
      }}
    >
      <div style={{ width: "100%", height: "50px" }}>{selectedDate}</div>
      <div
        style={{
          width: "100px",
          height: "30px",
          position: "absolute",
          right: "10px",
          bottom: "10px",
          border: "1px solid #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        등록
      </div>
    </div>
  );
};

export default Memo;
