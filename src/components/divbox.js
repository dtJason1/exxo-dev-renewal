import React from 'react';
import '../App.css';

function DivBox() {
    return ( 
        <div className='div1'>  
            <div>
                <h1 className='h1black'>
                    EXXO CERTIFIED
                </h1>
                <h1 className='h1grey'>
                    EXCELLENCE
                </h1>
            </div>
            <div className='div2'>
                <p>
                Certified by CPNP and FDA, ensuring 
                </p>
                <p>
                top safety and quality in exosome skincare.
                </p>
            </div>
        </div>
    );
  }

//   const useScrollFadeIn = () => {
//     const dom = useRef();
    
//     const handleScroll = useCallback(([entry]) => {
//         const { current } = dom;
          
//           if(entry.isIntersecting) {
//           current.style.transitionProperty = 'opacity transform';
//           current.style.transitionDuration = '1s';
//           current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
//           current.style.transitionDelay = '0s';
//           current.style.opacity = 1;
//           current.style.transform = 'translate3d(0, 0, 0)';      }
//       }, []);
    
//     useEffect(() => {
//       let observer;
//       const { current } = dom;
      
//       if (current) {
//         observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
//         observer.observe(current);
        
//         return () => observer && observer.disconnect();
//       };
//     }, [handleScroll]);
    
//       return {
//       ref: dom,
//     };
//   }
  
  export default DivBox;