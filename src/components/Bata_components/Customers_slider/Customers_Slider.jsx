import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Customer_say_box from "../Customer_say-box/Customer_say-box";

const Customers_Slider = () => {
  const repeate = () => {
    const boxes = [];
    for (let i = 0; i < 10; i++) {
      boxes.push(<Customer_say_box />);
    }
    return boxes;
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-150px",
    slidesToShow: 4,
    speed: 500,
  };

  return (
    <div className="">
      <Slider {...settings}>{repeate()}</Slider>
    </div>
  );
};

export default Customers_Slider;
