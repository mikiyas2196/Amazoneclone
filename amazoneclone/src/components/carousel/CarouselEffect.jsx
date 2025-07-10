import React from 'react';
import Slider from 'react-slick';
import { image } from './img/data';
import classes from './carousel.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CarouselEffect() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false
  };

  return (
    <Slider {...settings}>
      {image.map((imgSrc, index) => (
        <div key={index} className={classes.carouselImageWrapper}>
          <img src={imgSrc} alt={`carousel-${index}`} />
        </div>
      ))}
    </Slider>
  );
}

export default CarouselEffect
