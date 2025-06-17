"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinWrapper = ({ children, className = "" }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const element = wrapperRef.current;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={wrapperRef} className={`h-[100vh] ${className}`}>
      {children}
    </section>
  );
};

export default PinWrapper;
