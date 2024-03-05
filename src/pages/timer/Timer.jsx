import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const countRef = useRef(null);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setSecond((time) => time - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
  };

  const handleReset = () => {
    clearInterval(countRef.current);

    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  useEffect(() => {
    if (second <= 0) {
      if (minute > 0) {
        setSecond(59);
        setMinute(minute - 1);
      } else if (hour > 0) {
        setMinute(59);
        setSecond(59);
        setHour(hour - 1);
      } else {
        clearInterval(countRef.current);
      }
    }
  }, [second]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="time">
          <input
            className="input hour"
            type="number"
            onChange={(e) => setHour(e.target.value)}
            value={hour}
            placeholder="시간"
          />
          <input
            className="input minute"
            type="number"
            onChange={(e) => setMinute(e.target.value)}
            value={minute}
            placeholder="분"
          />
          <input
            className="input second"
            type="number"
            onChange={(e) => setSecond(e.target.value)}
            value={second}
            placeholder="초"
          />
        </div>
        <div className="btn-container">
          <span className="btn btn-start" onClick={handleStart}>
            start
          </span>

          <span className="btn btn-stop" onClick={handleStop}>
            stop
          </span>

          <span className="btn btn-reset" onClick={handleReset}>
            reset
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
