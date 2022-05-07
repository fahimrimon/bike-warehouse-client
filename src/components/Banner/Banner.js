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
          <h2>SHIPMENTS DELIVERED ON TIME</h2>
          <p>We provides always original product.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h2>SHIPMENTS DELIVERED ON TIME</h2>
          <p>We provides always original product.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h2>SHIPMENTS DELIVERED ON TIME</h2>
          <p>We provides always original product.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner4} alt="Third slide" />

        <Carousel.Caption>
          <h2>SHIPMENTS DELIVERED ON TIME</h2>
          <p>We provides always original product.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner">
        <img className="d-block w-100" src={banner5} alt="Third slide" />

        <Carousel.Caption>
          <h2>SHIPMENTS DELIVERED ON TIME</h2>
          <p>We provides always original product.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

