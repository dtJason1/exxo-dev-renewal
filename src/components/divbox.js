import { useEffect, useRef } from 'react';
import image_1 from '../image/section_4_1.png';
import image_2 from "../image/section_4_2.png";
import { useSequentialAnimation } from '../hooks/useSequentialAnimation.ts';
function DivBox() {
  const divRef = useRef(); // TypeScript: Ref for the div element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry); // Corrected typo
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add animation class when visible
          } else {
            entry.target.classList.remove('visible'); // Remove class when not visible
          }
        });
      },
      { threshold: 0.2 } // Optional: Trigger when 10% of the element is visible
    );

    const currentDiv = divRef.current;
    if (currentDiv) observer.observe(currentDiv); // Start observing the div

    // Clean up observer when the component unmounts
    return () => {
      if (currentDiv) observer.unobserve(currentDiv);
    };
  }, []);

  return (
    <div className="div1 animate-on-scroll" ref={divRef}>
      <div>
        <h1>EXXO CERTIFIED</h1>
        <h1>EXCELLENCE</h1>
      </div>
      <div className="div2">
        <p>Certified by CPNP and FDA, ensuring</p>
        <p>top safety and quality in exosome skincare.</p>
      </div>
    </div>
  );
}

// MoonBox Component
function MoonBox({ onAnimationEnd }) {
  const titles = ["LAMININ", "HYALURONAN", "PROCOLLAGEN", "FIBRONECTIN"];
  const divRefs = useSequentialAnimation(titles, 200);

  useEffect(() => {
    if (divRefs.current.length === titles.length) {
      const lastElement = divRefs.current[titles.length - 1];
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) onAnimationEnd();
        },
        { threshold: 1.0 }
      );
      observer.observe(lastElement);

      return () => observer.unobserve(lastElement);
    }
  }, [onAnimationEnd, titles.length, divRefs]);

  return (
    <div className="section_4_wrapper">
      {titles.map((title, index) => (
        <div
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
          className="section_4_redmoon"
        >
          <img src={image_1} alt={title} />
          <h1 className="section_4_redmoontext">{title}</h1>
        </div>
      ))}
    </div>
  );
}

function MoonBox2() {
  const titles = ["TGF-B", "SDF-1", "VEGF", "HGF", "BEGF", "EGF"];
  const divRefs = useSequentialAnimation(titles, 200);

  return (
    <div className="section_4_wrapper">
      {titles.map((title, index) => (
        <div
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
          className="section_4_redmoon"
        >
          <img src={image_2} alt={title} />
          <h1 className="section_4_redmoontext">{title}</h1>
        </div>
      ))}
    </div>
  );
}


export default DivBox;
export { MoonBox, MoonBox2 };