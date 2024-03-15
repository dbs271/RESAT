import React, { useState } from "react";
import "./style.css";
import { MdVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const correctId = "testId"; // 임의로 지정한 ID
  const correctPassword = "testPassword"; // 임의로 지정한 비밀번호

  const showPassword = () => {
    setVisible(!visible);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleLogin = () => {
    if (userId !== correctId || password !== correctPassword) {
      alert("ID 혹은 PW가 잘못되었습니다.");
    } else {
      alert("로그인이 되었습니다.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <input
          className="login-id login-input"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="ID"
        />
        <div className="password-container">
          <input
            className="login-password login-input"
            type={inputType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <span className="visible-icon" onClick={showPassword}>
            {visible ? <MdVisibility /> : <MdOutlineVisibilityOff />}
          </span>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
