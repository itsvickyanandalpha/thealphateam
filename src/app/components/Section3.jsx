// import React from "react";
// import Sec3Child from "./Sec3Child";

// const Section3 = () => {
//   return (
//     <div className="w-screen h-[150vh] bg-[url('/images/sec3bg.png')] bg-cover bg-center flex flex-col items-center justify-center">
//       <div className="w-[90%] h-[80%]  flex flex-col">
//         <div className="w-full h-[25%]  flex flex-row">
//           <div className="h-full w-[65%] relative">
//             <div className="text-5xl text-nowrap uppercase mb-2 tracking-wide bg-gradient-to-r from-[#FFB898] to-[#EF4B00] bg-clip-text text-transparent">
//               Lorem Ipsum is simply dummy
//             </div>
//             <div className="text-5xl uppercase mb-2 tracking-wide bg-gradient-to-r from-[#FFB898] to-[#EF4B00] bg-clip-text text-transparent">
//               text of the printing
//             </div>
//             <div className="text-5xl uppercase tracking-wide bg-gradient-to-r from-[#FFB898] to-[#EF4B00] bg-clip-text text-transparent">
//               industry.
//             </div>

//             <img
//               src="images/About.png"
//               className="w-[350px] h-[100px] absolute bottom-0 right-0"
//               alt=""
//             />
//           </div>
//           <div className="h-full w-[35%] text-sm text-[#9F9C9C] pl-20 pr-20">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </div>
//         </div>
//         <div className="w-full h-[70%] flex">
//           <div className="h-full w-[60%] relative">
//             {/* bg-[url('/images/sec3img1.png')] bg-cover bg-center */}
//             <img
//               src="images/sec3img1.png"
//               alt=""
//               className="bg-cover h-full -w-full bg-center"
//             />
//             <div className="text-base flex items-center justify-center absolute bottom-10 right-0 bg-gradient-to-r p-5 from-[#EF4B00] to-[#FF9326] rounded-br-4xl">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </div>
//           </div>
//           {/* <div className="h-full w-[40%]  pl-20 bg-red-500 relative">
//             <img
//               src="images/sec3img2.png"
//               alt=""
//               className="bg-cover h-[70%] w-[70%] bg-center"
//             />
//             <div className="w-[70%] text-sm text-[#9F9C9C] mt-10">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </div>

//             <img
//               src="/images/sec3circle.png"
//               alt="Overlap"
//               className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px]"
//             />
//           </div> */}
//           <div className="h-full w-[40%] pl-20 relative">
//             {/* Image Wrapper (for positioning) */}
//             <div className="relative h-[70%] w-[70%]">
//               {/* Main Image */}
//               <img
//                 src="/images/sec3img2.png"
//                 alt="Main"
//                 className="h-full w-full object-cover"
//               />

//               {/* Overlapping Circle Image (on image's top-right corner) */}
//               <img
//                 src="/images/sec3circle.png"
//                 alt="Overlap"
//                 className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px]"
//               />
//             </div>

//             {/* Text Content */}
//             <div className="w-[70%] text-sm text-[#9F9C9C] mt-10">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section3;

import React from "react";
import Sec3Child from "./Sec3Child";
import TextAnimator from "./TextAnimator";

const Section3 = () => {
  return (
    <div className="w-screen font-[mainfont] min-h-screen bg-[url('/images/sec3bg.png')] bg-cover bg-center flex flex-col items-center justify-center pt-20 pb-20 pl-5 pr-5">
      <div className="w-[90%] h-auto flex flex-col gap-10 lg:gap-0">
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[25%]">
          {/* Left Text and Image */}
          <div className="w-full lg:w-[65%] relative flex flex-col justify-center items-start pb-10">
            <TextAnimator>
              <div className="text-3xl sm:text-4xl md:text-5xl text-wrap md:text-nowrap uppercase mb-2 bg-gradient-to-r from-[#FFB898] to-[#EF4B00] bg-clip-text text-transparent">
                Lorem Ipsum is simply dummy
              </div>
            </TextAnimator>
            <TextAnimator>
              <div className="text-3xl sm:text-4xl md:text-5xl uppercase mb-2 bg-gradient-to-r from-[#FFB898] to-[#EF4B00] bg-clip-text text-transparent">
                text of the printing
              </div>
            </TextAnimator>
            <TextAnimator>
              <div className="text-3xl sm:text-4xl md:text-5xl uppercase bg-gradient-to-r from-[#FFB898] to-[#EF4B00] bg-clip-text text-transparent">
                industry.
              </div>
            </TextAnimator>

            <img
              src="images/About.png"
              alt=""
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto absolute bottom-0 right-0"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-[35%] text-sm text-[#9F9C9C] md:pl-20 md:pr-0">
            <TextAnimator>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TextAnimator>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[70%] gap-10 lg:gap-0">
          {/* Left Image and Text */}
          <div className="w-full lg:w-[60%] relative">
            <img
              src="images/sec3img1.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="text-base flex items-center justify-center absolute bottom-10 right-0 md:right-[-70px] bg-gradient-to-r p-3 sm:p-5 from-[#EF4B00] to-[#FF9326] rounded-br-4xl text-white text-xs sm:text-sm md:text-base max-w-[120%]">
              <TextAnimator>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </TextAnimator>
            </div>
          </div>

          {/* Right Image and Text */}
          <div className="w-full lg:w-[40%] relative flex flex-col items-center">
            <div className="relative w-[70%] max-w-[300px]">
              <img
                src="/images/sec3img2.png"
                alt="Main"
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/sec3circle.png"
                alt="Overlap"
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-auto"
              />
            </div>
            <div className="w-[50%] text-xs text-[#9F9C9C] mt-5 text-left">
              <TextAnimator>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </TextAnimator>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
