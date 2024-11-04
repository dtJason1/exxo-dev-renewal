import React from "react";
import section_6_1 from '../image/section_6_1.png';
import section_6_2 from '../image/section_6_2.png';
import section_6_3 from '../image/section_6_3.png';
import section_6_4 from '../image/section_6_4.png';

import { useMediaQuery } from 'react-responsive'

function MoonBox2({ image_1, image_2 , param, param1} ) {
  const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 800})
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 799 })
    return isMobile ? children : null
  }

  return (
    <div>
      <Desktop>
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
        <h1 className="section_header anotherheader section_6">{param}</h1>
      </div>
      <div>
        <p className="section_header content start visible">{param1}</p>
      </div>
    </div>

      </Desktop>
      <Mobile>
      <div className="sliderDiv">
      <div className="sliderDiv_upperflex slider_mobile">
        <div className="sliderDiv_img">
          <img src= {image_1} className="section_image"></img>
        </div>
        <div className="sliderDiv_img_another">
          <img src= {image_2} className="section_image"></img>

        </div>

      </div>
      <div className="slider_mobile">
        <h1 className="section_header anotherheader section_6">{param}</h1>
      </div>
      <div  className="slider_mobile">
        <p className="section_header content start visible">{param1}</p>
      </div>
    </div>


      </Mobile>
    </div>

  );
}



export default function SimpleSlider() {

  const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 800})
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 799 })
    return isMobile ? children : null
  }
  return (
    <div>
  <Desktop>
  <div class="carousel-container">
    <div class="carousel-track">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>
  </div>

  </Desktop>
  <Mobile>
  <div class="carousel-container">
    <div class="carousel-track">
      <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>
      <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>      <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>      <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>      <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>
      <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>     <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>     <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>     <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>     <div className="mobile_slider">
      <MoonBox2 image_1={section_6_1} image_2={section_6_2} param ={"PORE CARE"} param1={"Shrinks enlarged pores and regulates sebum production, leaving your skin smooth and refined."}></MoonBox2>
      <MoonBox2 image_1={section_6_3} image_2={section_6_4} param = {"SPOT CARE"} param1={"Effectively reduces or eliminates dark spots, leaving your skin smoother and brighter."}></MoonBox2>
      </div>
      </div>
  </div>

  </Mobile>
  </div>
  );
}
