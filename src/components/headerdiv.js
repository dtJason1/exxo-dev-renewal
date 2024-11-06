
import {useScrollAnimation} from '../hooks/useScrollAnimation.ts';
import { useState,useRef,useMemo,useCallback } from 'react';
import axios from "axios";
import { body } from 'framer-motion/client';
import { useMediaQuery } from 'react-responsive'

function SectionHeaderHeavyFirstDivBox({ param, param2, delay,  }) {
    const divRef = useScrollAnimation(delay);
  
    return (
      <div ref={divRef} className="div5">
        <div className="section_1_div_header">
          <span className="section_1_header ">{param}</span>  <span className="section_1_header another">{param2}</span>

        </div>
      </div>
    );
  }
  


function SectionHeaderLightFirstDivBox({ param, param2,delay }) {
    const divRef = useScrollAnimation(delay);
  
    return (
      <div ref={divRef} className="div5">
        <div className="section_1_div_header">
          <span className="section_1_header another">{param2}</span>  <span className="section_1_header">{param}</span>

          {/* <h1 className="section_1_header another">{param2}</h1>
          <div className="padding"></div>
          <h1 className="section_1_header">{param}</h1> */}
        </div>
      </div>
    );
  }



function P1DivBOX({ param, className, delay}) {
    const divRef = useScrollAnimation(delay);
  
    return (
        <h1 ref={divRef} className={className}>{param}</h1>

    );
}
function P1DivBOXLink({ param, className, delay, link}) {
  const divRef = useScrollAnimation(delay);

  return (
    <h1 ref={divRef} className={className}>
      <a href={link}>{param}</a>
    </h1>
  );
} 
const useDeviceQuery = () => {
  const isTablet = useMediaQuery({ minWidth: 800 });
  const isMobile = useMediaQuery({ maxWidth: 799 });
  return { isTablet, isMobile };
};

function Contact({ param, delay }) {
  // Move useMediaQuery to the top level
  const { isTablet, isMobile } = useDeviceQuery();

  const divRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    TEL: "",
    COMPANY: "",
    EMAIL: "",
    COUNTRY: "",
    CONTENTS: "",
  });

  const { name, TEL, COMPANY, EMAIL, COUNTRY, CONTENTS } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }, []);

  const submitData = async () => {
    alert(name)
    const url = "https://exxobio.com/test.php/";
    const data = {
      c_name: name,
      c_tel: TEL,
      c_company: COMPANY,
      c_email: EMAIL,
      c_country: COUNTRY,
      c_message: CONTENTS,
    };
    const config = { "Content-Type": "application/json" };

    try {
      const response = await axios.post(url, data, { headers: config });
      alert(response.data.message || "Submission Successful");
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  const onClick = () => {
    submitData();
    onReset();
  };

  const onReset = () => {
    setInputs({
      name: "",
      TEL: "",
      COMPANY: "",
      EMAIL: "",
      COUNTRY: "",
      CONTENTS: "",
    });
  };

  return (
    <div>
      {isTablet && (
        <div className="div9">
        <div className="div7 contactpage">
          <div className="div8">
            <div className="label">
              <h1 className="contactText">NAME</h1>
            </div>
            <input
              className="contact"
              name="name"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">TEL.</h1>
            </div>
            <input
              className="contact"
              name="TEL"
              onChange={onChange}
              value={TEL}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">COMPANY</h1>
            </div>
            <input
              className="contact"
              name="COMPANY"
              onChange={onChange}
              value={COMPANY}
            />
          </div>
        </div>
        <div className="div7 contactpage another">
          <div className="div8">
            <div className="label">
              <h1 className="contactText">E-MAIL</h1>
            </div>
            <input
              className="contact"
              name="EMAIL"
              onChange={onChange}
              value={EMAIL}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">COUNTRY</h1>
            </div>
            <input
              className="contact"
              name="COUNTRY"
              onChange={onChange}
              value={COUNTRY}
            />
          </div>
          <div className="div8 contents">
            <div className="label">
              <h1 className="contactText">CONTENTS</h1>
            </div>
            <input
              className="contact contents"
              name="CONTENTS"
              onChange={onChange}
              value={CONTENTS}
            />
          </div>
          <div className="div8 contentsbutton">
            <button onClick={onClick} className="contactButton">
              <h1 className="contactText contentbutton">SUBMIT</h1>
            </button>
          </div>
        </div>
      </div>
      )}
      {isMobile && (

        <div style={{width: "90vw"}}>
       <div className="div9" style={{ flexDirection: "column", maxWidth: "90%" }}>
       <div className="div8">
         <div className="label">
           <h1 className="contactText">NAME</h1>
         </div>
         <input
           className="contact"
           name="name"
           onChange={onChange}
           value={name}
         />
       </div>
       <div className="div8">
         <div className="label">
           <h1 className="contactText">TEL.</h1>
         </div>
         <input
           className="contact"
           name="TEL"
           onChange={onChange}
           value={TEL}
         />
       </div>
       <div className="div8">
         <div className="label">
           <h1 className="contactText">COMPANY</h1>
         </div>
         <input
           className="contact"
           name="COMPANY"
           onChange={onChange}
           value={COMPANY}
         />
       </div>
       <div className="div8">
         <div className="label">
           <h1 className="contactText" style={{minInlineSize : "max-content"}}>E-MAIL</h1>
         </div>
         <input
           className="contact"
           name="EMAIL"
           onChange={onChange}
           value={EMAIL}
         />
       </div>
       <div className="div8">
         <div className="label">
           <h1 className="contactText">COUNTRY</h1>
         </div>
         <input
           className="contact"
           name="COUNTRY"
           onChange={onChange}
           value={COUNTRY}
         />
       </div>
       <div className="div8 contents">
         <div className="label">
           <h1 className="contactText">CONTENTS</h1>
         </div>
         <input
           className="contact contents"
           name="CONTENTS"
           onChange={onChange}
           value={CONTENTS}
         />
       </div>
       <div className="div8 contentsbutton">
         <button onClick={onClick} className="contactButton">
           <h1 className="contactText contentbutton">SUBMIT</h1>
         </button>
       </div>

     </div>
      </div>
      )}
      {/* <Desktop>
        <div className="div9">
          <div className="div7 contactpage">
            <div className="div8">
              <div className="label">
                <h1 className="contactText">NAME</h1>
              </div>
              <input
                className="contact"
                name="name"
                onChange={onChange}
                value={name}
              />
            </div>
            <div className="div8">
              <div className="label">
                <h1 className="contactText">TEL.</h1>
              </div>
              <input
                className="contact"
                name="TEL"
                onChange={onChange}
                value={TEL}
              />
            </div>
            <div className="div8">
              <div className="label">
                <h1 className="contactText">COMPANY</h1>
              </div>
              <input
                className="contact"
                name="COMPANY"
                onChange={onChange}
                value={COMPANY}
              />
            </div>
          </div>
          <div className="div7 contactpage another">
            <div className="div8">
              <div className="label">
                <h1 className="contactText">E-MAIL</h1>
              </div>
              <input
                className="contact"
                name="EMAIL"
                onChange={onChange}
                value={EMAIL}
              />
            </div>
            <div className="div8">
              <div className="label">
                <h1 className="contactText">COUNTRY</h1>
              </div>
              <input
                className="contact"
                name="COUNTRY"
                onChange={onChange}
                value={COUNTRY}
              />
            </div>
            <div className="div8 contents">
              <div className="label">
                <h1 className="contactText">CONTENTS</h1>
              </div>
              <input
                className="contact contents"
                name="CONTENTS"
                onChange={onChange}
                value={CONTENTS}
              />
            </div>
            <div className="div8 contentsbutton">
              <button onClick={onClick} className="contactButton">
                <h1 className="contactText contentbutton">SUBMIT</h1>
              </button>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="div9" style={{ flexDirection: "column", maxWidth: "90%" }}>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">NAME</h1>
            </div>
            <input
              className="contact"
              name="name"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">TEL.</h1>
            </div>
            <input
              className="contact"
              name="TEL"
              onChange={onChange}
              value={TEL}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">COMPANY</h1>
            </div>
            <input
              className="contact"
              name="COMPANY"
              onChange={onChange}
              value={COMPANY}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">E-MAIL</h1>
            </div>
            <input
              className="contact"
              name="EMAIL"
              onChange={onChange}
              value={EMAIL}
            />
          </div>
          <div className="div8">
            <div className="label">
              <h1 className="contactText">COUNTRY</h1>
            </div>
            <input
              className="contact"
              name="COUNTRY"
              onChange={onChange}
              value={COUNTRY}
            />
          </div>
          <div className="div8 contents">
            <div className="label">
              <h1 className="contactText">CONTENTS</h1>
            </div>
            <input
              className="contact contents"
              name="CONTENTS"
              onChange={onChange}
              value={CONTENTS}
            />
          </div>
          <div className="div8 contentsbutton">
            <button onClick={onClick} className="contactButton">
              <h1 className="contactText contentbutton">SUBMIT</h1>
            </button>
          </div>
          <div className="footerclass" style={{ opacity: 1 }}>
            <div>
              <P1DivBOX
                delay={1000}
                className="section_header content start"
                param={"306, Gasan digital 1-ro 19, Geumcheon-gu, Seoul, 08594, South Korea"}
              ></P1DivBOX>
              <P1DivBOX
                delay={1000}
                className="section_header content start"
                param={"TEL | +82 33-747-4465-6 FAX | +82 -33-747-1133 E-MAIL | sales@daeyangmed.com"}
              ></P1DivBOX>
            </div>
            <P1DivBOX
              delay={1000}
              className="section_header content start"
              param={"©2023 Daeyang Medical Co., Ltd. ALL RIGHTS RESERVED"}
            ></P1DivBOX>
          </div>
        </div>
      </Mobile> */}
    </div>
  );
}
export default SectionHeaderHeavyFirstDivBox;  
export  {SectionHeaderLightFirstDivBox,P1DivBOX,Contact, P1DivBOXLink};  