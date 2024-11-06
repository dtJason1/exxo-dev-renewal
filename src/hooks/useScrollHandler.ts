import { pre } from 'framer-motion/client';
import { useCallback, useEffect, useState,useRef } from 'react';

export function useScrollHandler() {
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]); // 배열 타입을 number[]로 지정


  const scrollInProgressRef = useRef(false);
  const touchInProgressRef = useRef(false);
  const touchInProgressRef2 = useRef(false);

  // Calculate scroll positions based on the window height, updating on resize
  useEffect(() => {
    const calculateScrollPositions = () =>
      Array.from({ length: 8 }, (_, index) => window.innerHeight * index);
  
    setScrollPositions(calculateScrollPositions());
  
    const handleResize = () => setScrollPositions(calculateScrollPositions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const setIndexAndScroll = useCallback(
    (index: number) => {
  
      if (scrollInProgressRef.current || touchInProgressRef.current) {
        console.log("Scroll in progress, ignoring wheel event.");
        return;
      }
      else{
        setTimeout(() => {
          touchInProgressRef.current = true;

          scrollInProgressRef.current = true;

          setScrollInProgress(true);
          console.log("ScrollingTrue");
        }, 0);
    
        setCurrentIndex(index);
        console.log("Scroll started, index:", index);
    
        window.scrollTo({
          top: scrollPositions[index],
          left: 0,
        });
    
        setTimeout(() => {
          touchInProgressRef.current = false;

          scrollInProgressRef.current = false;
          touchInProgressRef2.current = false;

          setScrollInProgress(false);
          console.log("Scrolling finished, scrollInProgress reset to false.");
        }, 1500);
      }

    },
    [scrollPositions,touchInProgressRef, currentIndex]
  );
  
  function handleWindowWheel(event: WheelEvent) {
    event.preventDefault();
    console.log("SCROLL: ",scrollInProgressRef , "TOUCH :", touchInProgressRef.current)

    if (scrollInProgressRef.current || touchInProgressRef.current ||touchInProgressRef2.current) {
      console.log("SCROLL, scroll in progress, ignoring wheel event.");
      return;
    }
    console.log("Scrolling", "CURRENTINDEX: ", currentIndex,  "SCROLLPOSITIONS.LENGTH" , scrollPositions.length);

    if (event.deltaY > 0 && currentIndex < scrollPositions.length - 1) {

      console.log("Scrolling up", "CURRENTINDEX: ", currentIndex,  "SCROLLPOSITIONS.LENGTH" , scrollPositions.length);
      setCurrentIndex((prevIndex) => {
        console.log("previndex : ", prevIndex)
        const nextIndex = prevIndex + 1;
        setIndexAndScroll(nextIndex);
        return nextIndex;
        
      });
      console.log("currentIndex", currentIndex)

    } else if (event.deltaY < 0 && currentIndex > 0) {

      console.log("Scrolling down");

      setCurrentIndex((prevIndex) => {
        console.log("previndex : ", prevIndex)

        const nextIndex = prevIndex - 1;
        setIndexAndScroll(nextIndex);
        setTimeout(() => {
          touchInProgressRef.current = true;

          scrollInProgressRef.current = true;

          setScrollInProgress(true);
          console.log("ScrollingTrue");
        }, 0);
    
        return nextIndex;
        
      });
      console.log("currentIndex", currentIndex)
    }
  }

  function touch(index: number) {

    console.log("TOUCH   SCROLL: ",scrollInProgressRef , "TOUCH :", touchInProgressRef.current)
    if (scrollInProgressRef.current || touchInProgressRef.current ||touchInProgressRef2.current) {
      console.log("TOUCH , Scroll in progress, ignoring wheel event.");
      return;
    }
    touchInProgressRef2.current = true;
    setCurrentIndex((prevIndex) => {
      console.log("TOUCH", "CURRENTINDEX", currentIndex, "previndex : ", prevIndex)  

      const nextIndex = index;
      setIndexAndScroll(nextIndex);

      return nextIndex;
    });
  }

  // Attach wheel event listener
  useEffect(() => {
    window.addEventListener("wheel", handleWindowWheel, {passive: false});
    return () => window.removeEventListener("wheel", handleWindowWheel);
  }, [handleWindowWheel]);
  

  useEffect(() => {
    const handleResize = () => {
      const calculateScrollPositions = () => 
        Array.from({ length: 8 }, (_, index) => window.innerHeight * index);
      setScrollPositions(calculateScrollPositions());    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { touch };
}
