import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import banner1 from "../../Images/banner/banner(1).jpg";
import banner2 from "../../Images/banner/banner(2).jpg";
import banner3 from "../../Images/banner/banner(3).jpg";
import banner4 from "../../Images/banner/banner(4).jpg";
import banner5 from "../../Images/banner/banner(5).jpg";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Harry & Emily</h3>
          <p>For couples who love a little romance, a lot of laughter, and authentic moments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Jack & Amelia</h3>
          <p>For couples who love a little romance, a lot of laughter, and authentic moments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Oscar & Emily</h3>
          <p>For couples who love a little romance, a lot of laughter, and authentic moments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Thomas & Jessica</h3>
          <p>For couples who love a little romance, a lot of laughter, and authentic moments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner5} alt="Third slide" />

        <Carousel.Caption>
          <h3>James & Isabella</h3>
          <p>For couples who love a little romance, a lot of laughter, and authentic moments.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

