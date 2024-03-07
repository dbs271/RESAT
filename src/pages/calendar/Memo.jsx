import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Memo = ({ selectedDate, memos, saveMemo, memo, setMemo }) => {
  const [currentMemo, setCurrentMemo] = useState("");

  useEffect(() => {
    setCurrentMemo(memos[selectedDate] || "");
  }, [selectedDate]);

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        position: "relative",
        border: "1px solid #000",
        position: "absolute",
        right: "-350px",
        background: "#f2f2bf",
        padding: "10px",
      }}
    >
      <div style={{ width: "100%", height: "50px" }}>{selectedDate}</div>
      <textarea
        placeholder="메모를 입력할 수 있습니다."
        onChange={(e) => setCurrentMemo(e.target.value)}
        value={currentMemo}
        style={{
          width: "100%",
          height: "100px",
          background: "#f2f2bf",
          resize: "none",
          outline: "none",
          border: "none",
        }}
      />
      <div
        onClick={() => {
          saveMemo(selectedDate, currentMemo);
          setMemo(!memo);
        }}
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
