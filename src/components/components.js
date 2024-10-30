import React from "react";
import Slider from "react-slick";
import "./slick.css";    // --> node_modules에서 import 하고 있다면 경로가 다를 것이다.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import section_6_1 from '../image/section_6_1.png';
import section_6_2 from '../image/section_6_2.png';


function MoonBox2({ image_1, image_2 } ) {


  return (
    <div className="sliderDiv">
      <div className="sliderDiv_upperflex">
        <div className="sliderDiv_img">
          <img src= {image_1} className="section_image"></img>
        </div>
        <div className="sliderDiv_img_another">
          <img src= {image_2} className="section_image"></img>

        </div>

      </div>
      <div>
        <h1 className="section_header anotherheader section_6">PORE CARE</h1>
      </div>
      <div>
        <p className="section_header content start visible">Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined. </p>
      </div>
    </div>
  );
}



export default function SimpleSlider() {
  var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    
  };
  return (
    <Slider {...settings}>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} />
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} />
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} />
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} />

    </Slider>
  );
}
