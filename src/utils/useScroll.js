import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState, useRef } from "react";

const useScrollCarousel = () => {
  gsap.registerPlugin(useGSAP, ScrollToPlugin)
  const [scrollPosition, setScrollPosition] = useState({ current: 0, max: 0 });
  const containerRef = useRef(null);
  const { contextSafe } = useGSAP()

  // Function to handle scroll event
  const handleScroll = () => {
    if (!containerRef.current) {
      return
    }
    const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
    const maxScroll = scrollWidth - offsetWidth;
    const position = { max: maxScroll, current: scrollLeft }
    setScrollPosition(position);
  };

  // Function to scroll to the next item
  const scrollTo = contextSafe(({ currentTarget }) => {
    const container = containerRef.current;
    if (container) {
      const nextScrollLeft = currentTarget.name == "next" ? container.scrollLeft + container.offsetWidth : container.scrollLeft - container.offsetWidth

      gsap.to(containerRef.current, { duration: 1, scrollTo: { x: nextScrollLeft } })
    }
  });

  return {
    containerRef,
    handleScroll,
    scrollPosition,
    scrollTo,
  };
};

export default useScrollCarousel;
