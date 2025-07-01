import React from "react";
import TextAnimator from "./TextAnimator";

const ServiceSection = ({
  arrowPosition,
  alphaboxposition,
  title,
  subtitle,
  image,
  logo,
}) => {
  return (
    <div className="w-screen h-[100vh] font-[mainfont] bg-transparent flex items-center justify-center px-10 ">
      <div className="flex flex-col md:flex-row w-full h-[90%]  rounded-xl shadow-lg overflow-hidden relative p-10 pb-20">
        {/* Left Section */}
        <div className="md:w-1/2 w-full flex flex-col text-black justify-center p-10 relative">
          {alphaboxposition ? (
            <>
              <h2
                style={{
                  textShadow: `
                  1px 0 black,
                  -1px 0 black,
                  0 1px black,
                  0 -1px black
                `,
                }}
                className="text-3xl md:text-4xl font-black leading-tight mb-6"
              >
                <TextAnimator>{title}</TextAnimator>
              </h2>
              <p className="text-gray-600 mb-8 text-lg w-[80%]">
                <TextAnimator>{subtitle}</TextAnimator>
              </p>

              {/* Logo Box */}
              <div className=" w-[60%] h-[40%] bg-black flex items-center justify-center rounded-md">
                <img src={logo} alt="Alpha Logo" className="w-[80%]" />
              </div>
            </>
          ) : (
            <div className="w-[100%] h-[100%] ">
              {/* Logo Box */}
              <div className="w-[60%] h-[40%] mb-10 bg-black flex items-center justify-center rounded-md">
                <img src={logo} alt="Alpha Logo" className="w-[80%]" />
              </div>
              <h2
                style={{
                  textShadow: `
                  1px 0 black,
                  -1px 0 black,
                  0 1px black,
                  0 -1px black
                `,
                }}
                className="text-3xl md:text-4xl font-black leading-tight mb-6 uppercase"
              >
                <TextAnimator>{title}</TextAnimator>
              </h2>
              <p className="text-gray-600 mb-8 text-lg w-[80%]">
                <TextAnimator>{subtitle}</TextAnimator>
              </p>
            </div>
          )}
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 w-full relative">
          <img
            src={image}
            alt="Team Meeting"
            className="w-full h-[100%] object-cover"
          />

          {/* Floating Badge (D) */}
          {/* <div className="absolute bottom-10 right-10 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center text-lg font-semibold">
            D
          </div> */}
        </div>

        {/* Bottom Circle Arrow Button */}
        {/* <div
          style={{
            position: "absolute",
            // bottom: "100px",
            left: arrowPosition * 20,
          }}
          className="z-2 absolute bottom-10 transform translate-y-1/2"
        >
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-white text-2xl">&#8594;</span>
          </div>
        </div> */}

        {/* Bottom Border Line */}
        {/* <div className="absolute bottom-10 left-0 w-full h-[2px] bg-orange-500"></div> */}
      </div>
    </div>
  );
};

export default ServiceSection;
