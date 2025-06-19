// import React, { useState } from 'react';

// const data = [
//   { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
//   { question: "What is a component?", answer: "A component is a reusable piece of UI in React." },
//   { question: "What is state?", answer: "State is a way to manage dynamic data in a React component." },
// ];

// const QADropdownList = () => {
//   const [openIndex, setOpenIndex] = useState(null); // for allowing only one open at a time

//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col pl-20 pr-20 items-center justify-center bg-white mt-10">
//       {data.map((item, index) => (
//         <div key={index} className=" w-[70%] mb-4">
//           {/* Question button */}
//           <button
//             onClick={() => toggleDropdown(index)}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded flex justify-between items-center"
//           >
//             <span>{item.question}</span>
//             <span>{openIndex === index ? '-' : '+'}</span>
//           </button>

//           {/* Smooth dropdown */}
//           <div
//             className={`transition-all duration-500 ease-in-out overflow-hidden bg-gray-100 border rounded shadow px-4 ${
//               openIndex === index ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
//             }`}
//           >
//             <p>{item.answer}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QADropdownList;

import React, { useState } from "react";
import InfScr from "./InfScr";

const data = [
  {
    number: "01",
    title1: "AI",
    title2: "ENABLED SOLUTIONS",
    description: "We deliver AI-powered solutions tailored for your business.",
  },
  {
    number: "02",
    title1: "TECHNOLOGY",
    title2: "KNOWHOW",
    description: "Expertise in latest tech stacks and tools.",
  },
  {
    number: "03",
    title1: "DATA",
    title2: "IS IN OUR DNA",
    description: "We harness the power of data to drive decisions.",
  },
  {
    number: "04",
    title1: "ALPHA",
    title2: "DESIGN",
    description: "Creative and functional design for great user experience.",
  },
  {
    number: "05",
    title1: "TRANSPARENCY",
    title2: "& REPORTING",
    description: "Clear and honest reporting in every process.",
  },
  {
    number: "06",
    title1: "CONTENT",
    title2: "THAT CONVERTS",
    description: "Content strategies that drive customer action.",
  },
];

const QADropdownList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [show, setShow] = useState([true, true, true, true, true, true]); 
  console.log(show);

  const handleMouseEnter = (index) => {
    const newShow = [true, true, true, true, true, true];
    newShow[index] = false; 
    setShow(newShow);
    // toggleDropdown(index)
  };

  const handleMouseLeave = (index) => {
    const newShow = [true, true, true, true, true, true];
    setShow(newShow);
    // toggleDropdown(index)
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen h-full pt-10 font-[mainfont] space-y-4 bg-white flex flex-col items-center justify-center">
      <div className="w-[70%]">What sets us apart?</div>
      {data.map((item, index) => (
        <div key={index} className="border-t w-[70%] py-4">
          {/* Main Row */}
          {/* <div
            className="flex justify-between items-center cursor-pointer group relative"
            onClick={() => toggleDropdown(index)}
          >
            <span className="text-sm text-gray-600 w-8">{item.number}</span>
            <span className="flex-1 text-center font-bold text-lg">
              {item.title1}
              <img
                    src="/images/34.png"
                    alt="34"
                    className="
                    absolute inset-0 m-auto
                    w-0 h-0
                    transition-all duration-1000 ease-in-out
                    group-hover:w-[100px] group-hover:h-[100px]
                    "
                />
              {item.title2}

            </span>
            <span className="text-sm text-gray-600 w-20 text-right">
              {openIndex === index ? "See Less" : "See More"}
            </span>
          </div> */}

          <div
            className="flex justify-between items-center cursor-pointer group relative"
            onClick={() => toggleDropdown(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {
              <span
                className={`
                    text-base text-gray-600 w-8 transition-all duration-1000 ease-in-out
                    ${
                      show[index]
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }
                    `}
              >
                {item.number}
              </span>
            }

            {/* This flex-1 container grows as image expands */}
            <span className="flex-1 text-center font-black text-4xl flex items-center justify-center gap-2 transition-all duration-700 ease-in-out group-hover:gap-6">
              {item.title1}
              <img
                src="/images/56.png"
                alt="56"
                className="
                            w-0 h-0 
                            transition-all duration-1200 ease-in-out
                            group-hover:w-[70px] group-hover:h-[70px]
                        "
              />
              {item.title2}
            </span>
            <span
              className={`
                    text-base text-gray-600 w-auto text-right transition-all duration-1000 ease-in-out
                    ${show[index] ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
            >
              {openIndex === index ? "See Less" : "See More"}
            </span>
          </div>

          {/* Dropdown content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden 
              ${
              openIndex === index
                ? "max-h-40 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        </div>
      ))}
      <InfScr />
    </div>
  );
};

export default QADropdownList;
