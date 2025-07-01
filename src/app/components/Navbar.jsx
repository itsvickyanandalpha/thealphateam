"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextAnimator from "./TextAnimator";

const Navbar = () => {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      // Scroll Down - Hide Navbar
      gsap.to(navbarRef.current, {
        y: "-100%",
        duration: 0.7, // slightly faster for snappier response
        ease: "power2.out",
      });
    } else {
      // Scroll Up - Show Navbar
      gsap.to(navbarRef.current, {
        y: "0%",
        duration: 0.7,
        ease: "power2.out",
      });
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 font-[mainfont] left-0 w-full h-16 bg-gradient-to-r from-[#AB3500] via-[#C56100] to-[#FFC300] text-white flex items-center justify-between px-4 lg:px-20 z-50 shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center h-full p-3 w-[150px] space-x-2">
        <img src="/logos/navbarLogo.png" alt="Logo" className="h-full w-full" />
        {/* <span className="font-semibold text-lg">MyBrand</span> */}
      </div>

      {/* Right Section: CTA + Hamburger */}
      <div className="flex items-center space-x-4">
        {/* <button className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
          TALK TO US
        </button> */}
        <button className="bg-black text-white text-sm py-2 px-5 rounded-full flex items-center space-x-2 w-max">
          <TextAnimator>
            <span>TALK TO US</span>
          </TextAnimator>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12l-3.75 5.25M21 12H3" />
          </svg> */}
        </button>
        <button className="md:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
