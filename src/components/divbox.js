import { useEffect, useRef } from 'react';

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

export default DivBox;
