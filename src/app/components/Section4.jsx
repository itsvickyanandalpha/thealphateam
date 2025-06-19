// import React, { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// const Section4 = () => {
//   const [position, setPosition] = useState(0);

//   const changePositionPlus = () => {
//     if (position == 0) {
//       setPosition(1);
//     } else if (position == 1) {
//       setPosition(2);
//     } else {
//       setPosition(0);
//     }
//   };
//   const changePositionMinus = () => {
//     if (position == 0) {
//       setPosition(2);
//     } else if (position == 1) {
//       setPosition(0);
//     } else {
//       setPosition(1);
//     }
//   };

//   console.log(position, "position===========");

//   return (
//     <div className="w-screen h-screen p-10 pt-20 pb-20 bg-white">
//       <div className="h-[20%] w-full ">
//         <div className="text-4xl sm:text-5xl md:text-6xl text-wrap md:text-nowrap uppercase mb-2 bg-gradient-to-r from-[#171717] to-[#EF4B00] bg-clip-text text-transparent">
//           Full-Funnel Marketing
//         </div>
//         <div className="text-5 sm:text-5xl md:text-6xl uppercase bg-gradient-to-r from-[#171717] to-[#EF4B00] bg-clip-text text-transparent">
//           That Drives Sales
//         </div>
//       </div>
//       <div className="h-[80%] w-full flex">
//         {/* <div className={`w-[60%] h-full image-center object-fit relative bg-[url('${position === 0 ? "/images/funnel1.png" : position === 1 ? "/images/sec3img1.png" : position === 2 ? "/images/Rectangle-6008.png":""}')]`}> */}
//         <div
//           className="w-[60%] h-full image-center bg-cover object-cover relative"
//           style={{
//             backgroundImage: `url('${
//               position === 0
//                 ? "/images/funnel1.png"
//                 : position === 1
//                 ? "/images/funnel3.png"
//                 : position === 2
//                 ? "/images/funnel4.png"
//                 : ""
//             }')`,
//           }}
//         >
//           <img
//             src="/images/funnel2.png"
//             alt="Overlap"
//             className="absolute top-40 right-0 transform translate-x-1/2 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-auto"
//           />
//         </div>
//         <div className="w-[40%] h-full flex flex-col relative">
//           <div className="p-10 pl-20 h-[33%] text-base text-[#171717] flex items-center justify-center">
//             Are you a SaaS or IT services company ready to scale and boost
//             profits? You’re in the right place. We’re expert digital marketers
//             using AI-driven solutions to craft personalized outreach, nurture
//             leads, and drive results—plus deep expertise in Google Ads,
//             LinkedIn, and SEO.
//           </div>
//           <div className="relative h-[33%] flex items-center justify-center">
//             <img
//               src="/images/results.png"
//               alt="Overlap"
//               className="w-[60%] h-[60%] ml-0 md:ml-20"
//             />
//           </div>
//           <div className="flex flex-row items-center justify-center gap-5 w-full h-[33%]">
//             <div className="h-full w-[45%] relative">
//               <img
//                 src={`${
//                   position == 0
//                     ? "images/funnel3.png"
//                     : position == 1
//                     ? "images/funnel4.png"
//                     : "images/funnel1.png"
//                 }`}
//                 alt="slideimg2"
//                 className="w-full h-full"
//               />
//               <img
//                 src="images/34.png"
//                 alt="slideimg2"
//                 className="w-auto h-auto absolute right-0 bottom-0"
//               />
//             </div>
//             <div className="h-full w-[45%] relative">
//               <img
//                 src={`${
//                   position == 0
//                     ? "images/funnel4.png"
//                     : position == 1
//                     ? "images/funnel1.png"
//                     : "images/funnel3.png"
//                 }`}
//                 alt="sliderimg3"
//                 className="w-full h-full"
//               />
//               <img
//                 src="images/56.png"
//                 alt="slideimg2"
//                 className="w-auto h-auto absolute right-0 bottom-0"
//               />
//             </div>
//           </div>

//           <div className="flex text-black gap-6 absolute right-0 bottom-[-40px]">
//             <button
//               onClick={changePositionMinus}
//               className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//               aria-label="Previous"
//             >
//               <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
//             </button>
//             <button
//               onClick={changePositionPlus}
//               className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//               aria-label="Next"
//             >
//               <ChevronRightIcon className="h-6 w-6 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section4;


import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Section4 = () => {
  const [position, setPosition] = useState(0);

  const changePositionPlus = () => {
    setPosition((prev) => (prev + 1) % 3);
  };

  const changePositionMinus = () => {
    setPosition((prev) => (prev - 1 + 3) % 3);
  };

  console.log(position, "position===========");

  return (
    <div className="w-screen h-auto lg:h-screen p-5 sm:p-10 pt-20 pb-20 bg-white flex flex-col">
      {/* Heading */}
      <div className="h-auto lg:h-[20%] w-full text-center lg:text-left">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase mb-2 bg-gradient-to-r from-[#171717] to-[#EF4B00] bg-clip-text text-transparent">
          Full-Funnel Marketing
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase bg-gradient-to-r from-[#171717] to-[#EF4B00] bg-clip-text text-transparent">
          That Drives Sales
        </div>
      </div>

      {/* Main Content */}
      <div className="h-auto lg:h-[80%] w-full flex flex-col lg:flex-row mt-5">
        
        {/* Left Side Image */}
        <div
          className="w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-full bg-center bg-cover relative"
          style={{
            backgroundImage: `url('${
              position === 0
                ? "/images/funnel1.png"
                : position === 1
                ? "/images/funnel3.png"
                : "/images/funnel4.png"
            }')`,
          }}
        >
          <img
            src="/images/funnel2.png"
            alt="Overlap"
            className="absolute top-10 right-2 sm:right-5 lg:top-40 lg:right-0 transform lg:translate-x-1/2 w-[60px] sm:w-[80px] md:w-[100px] lg:w-[140px]"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-[40%] h-auto ml-5 flex flex-col relative mt-5 lg:mt-0">

          {/* Text */}
          <div className="h-auto md:h-[33%] text-sm sm:text-base text-[#171717] flex items-center justify-center text-center lg:text-left">
            Are you a SaaS or IT services company ready to scale and boost
            profits? You’re in the right place. We’re expert digital marketers
            using AI-driven solutions to craft personalized outreach, nurture
            leads, and drive results—plus deep expertise in Google Ads,
            LinkedIn, and SEO.
          </div>

          {/* Middle Image */}
          <div className="h-auto md:h-[33%] relative flex items-center justify-center">
            <img
              src="/images/Results.png"
              alt="Overlap"
              className="w-[50%] sm:w-[40%] md:w-[60%] lg:w-[60%] h-auto"
            />
          </div>

          {/* Small Images */}
          <div className="h-auto md:h-[33%] flex flex-row items-center justify-center gap-3 sm:gap-5 w-full mt-5">
            {[0, 1].map((i) => (
              <div key={i} className="relative  w-[45%]">
                <img
                  src={`${
                    i === 0
                      ? position === 0
                        ? "images/funnel3.png"
                        : position === 1
                        ? "images/funnel4.png"
                        : "images/funnel1.png"
                      : position === 0
                      ? "images/funnel4.png"
                      : position === 1
                      ? "images/funnel1.png"
                      : "images/funnel3.png"
                  }`}
                  alt={`slideimg${i + 2}`}
                  className="w-full h-full object-cover rounded"
                />
                <img
                  src={i === 0 ? "images/34.png" : "images/56.png"}
                  alt="slideimg overlap"
                  className="w-8 sm:w-10 h-auto absolute right-0 bottom-0"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex text-black gap-4 sm:gap-6 absolute right-2 bottom-[-30px] sm:bottom-[-40px] lg:right-0 lg:bottom-[-35px]">
            <button
              onClick={changePositionMinus}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
            <button
              onClick={changePositionPlus}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              aria-label="Next"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
