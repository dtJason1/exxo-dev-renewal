import React from "react";
import Slider from "react-slick";
import "./slick.css";    // --> node_modules에서 import 하고 있다면 경로가 다를 것이다.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import section_6_1 from '../image/section_6_1.png';
import section_6_2 from '../image/section_6_2.png';
import section_6_3 from '../image/section_6_3.png';
import section_6_4 from '../image/section_6_4.png';


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
    draggable: false,
    pauseOnHover: false,

    dots: false,  // 슬라이드 점표시
    infinite: true,  // 무한반복
    slidesToShow: 2,  // 한 프레임에 표시할 슬라이드 수
    slidesToScroll: 1,  // 한번에 스크롤할 슬라이드 수
    autoplay: true,  // 자동 재생
    speed: 10000,

    cssEase: "linear",
  };
  return (
  <div class="carousel-container">
    <div class="carousel-track">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>
      
      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>      <MoonBox2 image_1={section_6_1} image_2={section_6_2}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4}></MoonBox2>
      </div>
  </div>
  );
}
