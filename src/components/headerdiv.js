
import {useScrollAnimation} from '../hooks/useScrollAnimation.ts';

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
export default SectionHeaderHeavyFirstDivBox;  
  
export  {SectionHeaderLightFirstDivBox,P1DivBOX};  