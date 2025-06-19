// import React from 'react';

// const RocketSection = () => {
//   return (
//     <div className='w-screen h-screen bg-white flex items-center justify-center'>
//     <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-10">
      
//       {/* Left Content */}
//       <div className="flex flex-col space-y-4 md:w-1/2 text-center md:text-left">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">SMART</h2>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 leading-tight">SCALABLE</h2>
//         <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">SOLUTIONS</h1>

//         <p className="text-sm md:text-base text-gray-600 mt-4">
//           We at The Alpha Team believe that innovative use of technology combined with creative designs 
//           and use of basic principles of marketing produces out of the box and effective solutions. 
//           We help you stay ahead of the competition by adopting new tools, techniques and capabilities coming 
//           in to the digital marketing world everyday.
//         </p>
//         <p className="text-sm md:text-base text-gray-600">
//           Growth Hacking + Marketing Technology = Exponential Growth
//         </p>
//       </div>

//       {/* Right Image & Logo */}
//       <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
//         <img
//           src="images/view-3d-space-rocket-model-1.png"
//           alt="Rocket"
//           className="w-60 md:w-80 lg:w-96 object-contain"
//         />
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Alpha_logo.svg/2560px-Alpha_logo.svg.png" // Example alpha logo (you can replace)
//           alt="Alpha Logo"
//           className="w-32 mt-4"
//         />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default RocketSection;


import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RocketSection = () => {
  const rocketRef = useRef(null);

  useEffect(() => {
    const element = rocketRef.current;

    gsap.to(element, {
      y: -300, // Move rocket up
      opacity: 0, // Fade out
      ease: 'power2.out', // makes it slower and smoother
      duration: 2, // makes the movement smoother
      scrollTrigger: {
        trigger: element,
        start: 'top 10%', // only starts when 80% of viewport sees it
        end: 'top 0%',  // fully moves up when top reaches 10% of viewport
        scrub: 1, // smoother, scroll-bound animation
        markers: false, // set to true for debugging scroll points
      },
    });

    return () => {
      ScrollTrigger.kill(); // Clean up on unmount
    };
  }, []);
  return (
    <div className="flex flex-col font-[mainfont] md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-20">
      
      {/* Left Content */}
      <div className="flex flex-col space-y-4 md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">SMART</h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 leading-tight">SCALABLE</h2>
        <h1 style={{marginLeft:"100px"}} className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">SOLUTIONS</h1>

        <p className="text-sm md:text-base text-gray-600 mt-4">
          We at The Alpha Team believe that innovative use of technology combined with creative designs 
          and use of basic principles of marketing produces out of the box and effective solutions. 
          We help you stay ahead of the competition by adopting new tools, techniques and capabilities coming 
          in to the digital marketing world everyday.
        </p>
        <p className="text-sm md:text-base text-gray-600">
          Growth Hacking + Marketing Technology = Exponential Growth
        </p>
      </div>

      {/* Right Rocket Image */}
      <div ref={rocketRef} className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
        <img
          // ref={rocketRef}
          src="images/view-3d-space-rocket-model-1.png"
          alt="Rocket"
          className="w-60 md:w-80 lg:w-96 object-contain"
        />
        <img
          src="images/rocketLogo.png"
          alt="Alpha Logo"
          className="w-32 mt-4"
        />
      </div>
    </div>
  );
};

export default RocketSection;


// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const RocketSection = () => {
//   const rocketRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const rocket = rocketRef.current;
//     const text = textRef.current;

//     // Rocket moves up
//     gsap.to(rocket, {
//       y: -300,
//       opacity: 0,
//       ease: 'power2.out',
//       duration: 2,
//       scrollTrigger: {
//         trigger: rocket,
//         start: 'top 10%',
//         end: 'top 0%',
//         scrub: 1,
//         markers: false,
//       },
//     });
    

//     gsap.to(text, {
//       y: 250,
//       opacity: 0,
//       ease: 'power2.out',
//       duration: 2, // duration doesn't matter with 'scrub'
//       scrollTrigger: {
//         trigger: text,
//         start: 'top 20%', // animation starts when text hits 80% of viewport
//         end: 'top 10%',   // animation ends when text reaches 20%
//         scrub: 1,         // makes scroll feel smooth and tied to scroll
//         markers: false,
//       },
//     });

//     return () => {
//       ScrollTrigger.kill();
//     };
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-20">
      
//       {/* Left Content (Text) */}
//       <div ref={textRef} className="flex flex-col space-y-4 md:w-1/2 text-center md:text-left">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">SMART</h2>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 leading-tight">SCALABLE</h2>
//         <h1 style={{marginLeft:"100px"}} className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">SOLUTIONS</h1>

//         <p className="text-sm md:text-base text-gray-600 mt-4">
//           We at The Alpha Team believe that innovative use of technology combined with creative designs 
//           and use of basic principles of marketing produces out of the box and effective solutions. 
//           We help you stay ahead of the competition by adopting new tools, techniques and capabilities coming 
//           in to the digital marketing world everyday.
//         </p>
//         <p className="text-sm md:text-base text-gray-600">
//           Growth Hacking + Marketing Technology = Exponential Growth
//         </p>
//       </div>

//       {/* Right Rocket Image */}
//       <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
//         <img
//           ref={rocketRef}
//           src="images/view-3d-space-rocket-model-1.png"
//           alt="Rocket"
//           className="w-60 md:w-80 lg:w-96 object-contain"
//         />
//         <img
//           ref={rocketRef}
//           src="images/rocketLogo.png"
//           alt="Alpha Logo"
//           className="w-32 mt-4"
//         />
//       </div>
//     </div>
//   );
// };

// export default RocketSection;


