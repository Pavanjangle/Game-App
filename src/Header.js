import React, { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="left-section">
        <div className="menu-icon">&#9776;</div>

        <div className="logo">
          <img
            src="https://winbuzzbet.com/wp-content/uploads/2023/09/logo-2.png"
            alt="Logo"
          />
        </div>
      </div>

      <div className="right-section">
        <div className="buttons">
          <button className="login">LOGIN</button>
          <button className="register">REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
