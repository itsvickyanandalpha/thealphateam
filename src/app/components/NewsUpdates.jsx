import React from "react";

const NewsUpdates = () => {
  return (
    <div className="w-screen h-screen mt-20">
      {/* Title */}
      <div
        className="text-center text-3xl md:text-5xl font-black font-[mainfont] mb-8"
        style={{
          fontWeight: 900,
          //   WebkitTextStroke: "1px black",
          color: "black",
        }}
      >
        NEWS & UPDATES
      </div>

      {/* Main Grid */}
      <div className="flex items-center justify-center gap-8">
        {/* Main Large Card */}
        <div className="relative w-full md:w-[50vw] h-[70vh] overflow-hidden rounded-xl">
          <img
            src="/images/Rectangle-6009.png" // Replace with your actual image
            alt="News Main"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute flex gap-14 bottom-0 left-10 w-[90%] pb-10 bg-gradient-to-t from-black  via-transparent to-transparent p-4 text-white">
            <p className="text-sm">
              Omnichannel outreach targeting priority accounts across multiple
              touchpoints. Intent data, IP based ads, and AI assisted bespoke
              communication defines our ABM strategy.
            </p>
            <p className="mt-2 text-orange-500 text-nowrap font-medium cursor-pointer">
              Read More
            </p>
          </div>
        </div>

        {/* Small Cards */}
        <div className="flex flex-row gap-4 justify-center">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[10vw] h-[70vh] overflow-hidden rounded-xl"
            >
              <img
                src={`/images/nu${index + 1}.png`} // Replace with your small thumbnail
                alt={`News ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;
