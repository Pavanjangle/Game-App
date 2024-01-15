import React from "react";
import "./ButtonCarousel.css"; 
const ButtonCarousel = () => {
  return (
    <div className="button-carousel-container">
      <div className="button-carousel">
        <div className="button">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/8037/8037724.png"
          ></img>
          <span className="label">In Play</span>
        </div>

        <div className="button">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/8037/8037724.png"
          ></img>
          <span className="label">Cricket</span>
        </div>

        <div className="button">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/8037/8037724.png"
          ></img>
          <span className="label">Football</span>
        </div>

        <div className="button">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/8037/8037724.png"
          ></img>
          <span className="label">Tennis</span>
        </div>

        <div className="button">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/8037/8037724.png"
          ></img>
          <span className="label">Chess</span>
        </div>

        <div className="button">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/8037/8037724.png"
          ></img>
          <span className="label">Tabletenis</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonCarousel;
