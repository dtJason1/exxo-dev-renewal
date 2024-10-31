
import {useScrollAnimation} from '../hooks/useScrollAnimation.ts';
import { useState } from 'react';
import axios from "axios";
import { body } from 'framer-motion/client';

function SectionHeaderHeavyFirstDivBox({ param, param2, delay }) {
    const divRef = useScrollAnimation(delay);
  
    return (
      <div ref={divRef} className="div5">
        <div className="section_1_div_header">
          <h1 className="section_1_header">{param}</h1>
          <div className="padding"></div>
          <h1 className="section_1_header another">{param2}</h1>
        </div>
      </div>
    );
  }
  


function SectionHeaderLightFirstDivBox({ param, param2,delay }) {
    const divRef = useScrollAnimation(delay);
  
    return (
      <div ref={divRef} className="div5">
        <div className="section_1_div_header">
          <h1 className="section_1_header another">{param2}</h1>
          <div className="padding"></div>
          <h1 className="section_1_header">{param}</h1>
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
  
function Contact({ param, delay}) {
  const divRef = useScrollAnimation(delay);
  const [inputs, setInputs] = useState({
    name: "",
    TEL: "",
    COMPANY: "",
    EMAIL: "",
    COUNTRY: "",
    CONTENTS: "",
  });
  const { name, TEL,COMPANY,EMAIL,COUNTRY,CONTENTS } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const componentDidMount = () => {
    const url = "https://exxobio.com/test.php/";
    const data =  {
      'c_name': name,
      'c_tel': TEL,
      'c_company': COMPANY,
      'c_email': EMAIL,
      'c_country': COUNTRY,
      'c_message': CONTENTS,
    };
    const config = {"Content-Type": 'application/json'};
    
    const response = axios({
      headers: config,
      method: 'post',
      url: url,
      data: data
    });
    alert(response.body)
  }
  const onClick = () => {
    componentDidMount();
    onReset();
  }
 
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
    <div className='div9'>
      <div className='div7 contactpage'>
        <div className='div8'>
          <div className='label'>
            <h1 ref={divRef} className="contactText">NAME</h1>
          </div>
          <input className='contact'
            name="name" 
            onChange={onChange} 
            value={name} 
          />
        </div>
        <div className='div8'>
          <div className='label'>
            <h1 ref={divRef} className="contactText">TEL.</h1>
          </div>
          <input className='contact'
            name="TEL" 
            onChange={onChange} 
            value={TEL} 
          />
        </div> 
        <div className='div8'>
          <div className='label'>
            <h1 ref={divRef} className="contactText">COMPANY</h1>
          </div>
          <input className='contact'
            name="COMPANY" 
            onChange={onChange} 
            value={COMPANY} 
          />
        </div>      
      </div>
      <div className='div7 contactpage'>
        <div className='div8'>
          <div className='label'>
            <h1 ref={divRef} className="contactText">E-MAIL</h1>
          </div>
          <input className='contact'
            name="EMAIL" 
            onChange={onChange} 
            value={EMAIL} 
          />
        </div>
        <div className='div8'>
          <div className='label'>
            <h1 ref={divRef} className="contactText">COUNTRY</h1>
          </div>
          <input className='contact'
            name="COUNTRY" 
            onChange={onChange} 
            value={COUNTRY} 
          />
        </div>      
        <div className='div8 contents'>
          <div className='label'>
            <h1 ref={divRef} className="contactText">CONTENTS</h1>
          </div>
          <input className='contact contents'
            name="CONTENTS" 
            onChange={onChange} 
            value={CONTENTS} 
          />
        </div>    
        <div className='div8 contentsbutton'>
          <button onClick={onClick} className='contactButton'>
            <h1 className="contactText contentbutton">SUBMIT</h1>

          </button>
        </div> 
      </div>
    </div>





  );
}
export default SectionHeaderHeavyFirstDivBox;  
export  {SectionHeaderLightFirstDivBox,P1DivBOX,Contact};  