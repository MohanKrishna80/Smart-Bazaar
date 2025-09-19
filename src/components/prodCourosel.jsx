import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProdCourosel({ images }) {
  const settings = {
    dots: true,             // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,           // Show next/prev arrows
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Slider {...settings} className="w-full max-w-md">
        {images?.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="object-contain max-h-[500px] w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
