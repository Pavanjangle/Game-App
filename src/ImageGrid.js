import React from "react";
import Slider from "react-slick";

import "./ImageGrid.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGrid = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="carousel-item">
          <img
            src="https://winbuzzbet.com/wp-content/uploads/2023/09/Screenshot-2023-09-23-110526-1-1.png"
            alt="Carousel Image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://winbuzzbet.com/wp-content/uploads/2023/09/Screenshot-2023-09-23-110526-1-1.png"
            alt="Carousel Image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://winbuzzbet.com/wp-content/uploads/2023/09/Screenshot-2023-09-23-110526-1-1.png"
            alt="Carousel Image 1"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageGrid;
