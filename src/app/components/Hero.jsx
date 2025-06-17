

// import React from "react";
// import Image from "next/image";

// const circles = [
//   { bottom: "0", left: "0", size: "40" },
//   { bottom: "10", left: "10", size: "20" },
//   { bottom: "5", left: "5", size: "30" }, // example variation
//   // { bottom: '0', left: '20', size: '25' }, // example variation
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-between px-8 lg:px-20 bg-gradient-to-r from-[#AB3500] via-[#C56100] to-[#FFC300] text-white overflow-hidden">
//       {/* Left Content */}
//       <div className="z-10 max-w-xl flex flex-col space-y-6 p-10">
//         <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-widest">
//           DIGITAL <br /> MARKETING <br /> FOR{" "}
//           <span className="inline-block bg-white text-black px-2 py-1 rounded-xl">
//             POWERFUL
//           </span>{" "}
//           <br /> RESULTS.
//         </h1>
//         <p className="text-small lg:text-[16px] text-gray-200">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//         <button className="bg-black text-white text-sm py-3 px-6 rounded-full flex items-center space-x-2 w-max">
//           <span>TALK TO US</span>
//           <Image
//             src="/logos/heroarrow.png" // replace with your PNG path
//             alt="Logo"
//             width={20} // adjust size as needed
//             height={20}
//           />
//         </button>
//       </div>

//       <div className="absolute right-0 bottom-0 w-1/2 h-full">
//         <Image
//           src="/images/astronaut.png"
//           alt="Astronaut"
//           width={540} // control width in px
//           height={540} // control height in px
//           className="object-cover absolute z-0 right-0 bottom-0" // you can use 'object-contain' or 'object-cover'
//         />
//         <Image
//           src="/images/tat.png"
//           alt="Astronaut"
//           width={540} // control width in px
//           height={540} // control height in px
//           className="object-cover absolute z-0 right-60 bottom-0" // you can use 'object-contain' or 'object-cover'
//         />
//       </div>

//       <div className="absolute left-0 bottom-0 w-1/2 h-full">
//         <Image
//           src="/images/herobgcircle.png"
//           alt="Astronaut"
//           width={160} // control width in px
//           height={160} // control height in px
//           className="object-cover absolute z-0 left-0 bottom-[-50]" // you can use 'object-contain' or 'object-cover'
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative font-[mainfont] w-full h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 bg-gradient-to-r from-[#AB3500] via-[#C56100] to-[#FFC300] text-white overflow-hidden">
      
      {/* Left Content */}
      <div className="z-10 max-w-xl flex flex-col space-y-4 sm:space-y-6 p-20 sm:p-20 lg:p-2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide">
          DIGITAL <br /> MARKETING <br /> FOR{" "}
          <span className="inline-block bg-white text-black px-2 py-1 rounded-xl">
            POWERFUL
          </span>{" "}
          <br /> RESULTS.
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-black text-white text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center space-x-2 mx-auto lg:mx-0 w-max">
          <span>TALK TO US</span>
          <Image
            src="/logos/heroarrow.png"
            alt="Logo"
            width={16} // smaller size for mobile
            height={16}
            className="sm:w-5 sm:h-5"
          />
        </button>
      </div>

      {/* Right Images */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 sm:h-full lg:w-1/2 lg:h-full">
        <Image
          src="/images/astronaut.png"
          alt="Astronaut"
          width={300}
          height={300}
          className="object-contain absolute z-0 right-0 bottom-0 w-[150px] sm:w-[220px] lg:w-[540px] h-auto"
        />
        <Image
          src="/images/tat.png"
          alt="Tat"
          width={300}
          height={300}
          className="object-contain absolute z-0 right-20 sm:right-70 bottom-0 w-[120px] sm:w-[180px] lg:w-[540px] h-auto"
        />
      </div>

      {/* Left Circle Background */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 sm:h-full">
        <Image
          src="/images/herobgcircle.png"
          alt="Circle"
          width={120}
          height={120}
          className="object-contain absolute z-0 left-0 bottom-[-20px] sm:bottom-[-40px] lg:bottom-[-50px] w-[80px] sm:w-[120px] lg:w-[160px] h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
