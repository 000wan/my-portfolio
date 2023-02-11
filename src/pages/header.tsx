import React, { useState } from "react";
import "../css/header.css";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className="header">
      <button className="header-toggle" onClick={(e) => setToggle(!toggle)}>
        <span className="material-symbols-outlined header-toggle-button">menu</span>
      </button>
      <div className="header-menu">
        <button className={toggle ? "header-button" : "header-button-exit"}>Home</button>
        <button className={toggle ? "header-button" : "header-button-exit"}>Portfolio</button>
        <button className={toggle ? "header-button" : "header-button-exit"}>Education</button>
        <button className={toggle ? "header-button" : "header-button-exit"}>Interests</button>
      </div>
    </div>
  );
};

export default Header;
