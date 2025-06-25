import React from "react";

const FreeAuditSection = () => {
  return (
    <div className="w-screen font-[mainfont] h-[40vh] bg-gradient-to-r from-[#EF4B00] to-[#FF9326] flex flex-col items-center justify-center px-4 text-center">
      {/* Main Text */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-[mainfont] leading-tight uppercase">
        Request a Free Audit. <br /> Outsmart Your Competition
      </h1>

      {/* CTA Button */}
      <button className="mt-6 bg-black uppercase text-white px-6 py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold font-[mainfont] tracking-wide hover:bg-gray-800 transition duration-300">
        Arrange a Consultation
      </button>
    </div>
  );
};

export default FreeAuditSection;
