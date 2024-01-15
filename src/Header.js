import React, { useState } from "react";
import "./Header.css";

function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <div className="header-container">
      <div className="left-section">
        <div onClick={handleMenuIconClick} className="menu-icon">&#9776;</div>

        <div className="logo">
          <img
            src="https://winbuzzbet.com/wp-content/uploads/2023/09/logo-2.png"
            alt="Logo"
          />
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <button className="close-button" onClick={handleCloseSidebar}>
            &times;
          </button>
          <img className="sidebar-img"
            src="https://winbuzzbet.com/wp-content/uploads/2023/09/logo-2.png"
            alt="Logo"
          />
          <h3>sidebar content here...</h3>
        </div>
      </div>

      <div className="right-section">
        <div className="buttons">
          <button className="login" onClick={handleLoginClick}>
            LOGIN
          </button>
          <button className="register">REGISTER</button>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="login-modal">
          <h1>Work in progress..</h1>

          <button onClick={handleCloseLoginModal}>CLOSE</button>
        </div>
      )}
    </div>
  );
}

export default Header;
