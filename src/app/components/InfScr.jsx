"use client";
import React from "react";
import { motion } from "framer-motion";

const InfScr = () => {
  const logos = [
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
    "Typography",
    "UI/UX Design",
    "Wireframing",
    "Graphic Designing",
    "Color Grading",
  ];

  // Double the logos to make looping seamless
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="h-[50vh] w-screen mt-[-50px] flex flex-col bg-white text-white font-[mainfont] items-center justify-center">
      <div
        className="w-full h-[50px] overflow-hidden  flex items-center relative mb-[48px]"
        style={{ transform: "skewY(-2deg)", backgroundColor: "#EF4B00" }}
      >
        <motion.div
          className="flex gap-10 min-w-max"
          animate={{ x: ["-50%", "0%"] }} // move half of container width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // adjust this to control speed
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div key={index}>{src}</div>
          ))}
        </motion.div>
      </div>
      <div
        className="w-full h-[50px] overflow-hidden  flex items-center relative"
        style={{ transform: "skewY(2deg)", backgroundColor: "#2D2D2D" }}
      >
        <motion.div
          className="flex gap-10 min-w-max"
          animate={{ x: ["0%", "-50%"] }} // move half of container width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // adjust this to control speed
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div key={index}>{src}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfScr;
