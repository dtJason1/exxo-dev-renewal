import React from 'react';
import '../App.css';
import DivBox from './divbox';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';

function Sector_1({ onLogoClick }: { onLogoClick: () => void }) {
  useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행

  return (
    <section id="section" className="section_1">
      <div className="home">
        <DivBox />
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>

        <button onClick={onLogoClick}>hello</button>
      </div>
    </section>
  );
}

export default Sector_1;
