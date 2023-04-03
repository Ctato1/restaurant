import React from "react";
import Slider from "react-slick";
import './testimonial-slider.css'

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    slideToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings} className="all__review">
      <div  className="person__review">
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          expedita! Blanditiis nihil doloribus illum molestias corrupti labore
          debitis, hic consectetur nesciunt culpa quo, sed dolor, illo
          exercitationem nam obcaecati voluptate.
        </p>
        <div className="person__info d-flex align-items-center gap-3 mt-3">
            <img src={ava01} alt="avatar" className="w-25"/>
            <h6>John Doe</h6>
        </div>
      </div>
      <div className="person__review">
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          expedita! Blanditiis nihil doloribus illum molestias corrupti labore
          debiti
        </p>
        <div className="person__info d-flex align-items-center gap-3 mt-3">
            <img src={ava02} alt="avatar" className="w-25"/>
            <h6>Mitchelle Doe</h6>
        </div>
      </div>
      
      <div className="person__review">
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          expedita! Blanditiis nihil doloribus illum molestias corrupti labore
          debitis, hic consectetur nesciunt culpa quo, lorem1
        </p>
        <div className="person__info d-flex align-items-center gap-3 mt-3">
            <img src={ava03} alt="avatar" className="w-25"/>
            <h6>Tato Doe</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
