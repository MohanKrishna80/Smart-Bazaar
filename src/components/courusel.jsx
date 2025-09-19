import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Courosel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 800,
  };
  return (
    <Slider {...settings} className="mt-16">
      <div>
        <img src="/flip back.jpg" alt="" className="object-cover w-full" />
      </div>
      <div>
        <img src="/b2.jpg" alt="" className="object-cover w-full" />
      </div>
      <div>
        <img src="/b3.jpg" alt="" className="object-cover w-full" />
      </div>
    </Slider>
  );
}
