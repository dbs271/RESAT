import React, { useState } from "react";
import "./styles.css";
import { MdMenu } from "react-icons/md";

const Nav = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxDisplay = () => {
    setIsBoxVisible(!isBoxVisible);
  };
  return (
    <div className="con">
      <ul className="box">
        {/* Home, About, Contact, FAQ */}
        <li className="item icon" onClick={toggleBoxDisplay}>
          <MdMenu />
        </li>
        <li>
          <a href="#" className="item">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="item">
            About
          </a>
        </li>
        <li>
          <a href="#" className="item">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="item">
            FAQ
          </a>
        </li>
      </ul>
      <ul className="box2" style={{ display: isBoxVisible ? "flex" : "none" }}>
        <li>
          <a href="#" className="item2">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="item2">
            About
          </a>
        </li>
        <li>
          <a href="#" className="item2">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="item2">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
