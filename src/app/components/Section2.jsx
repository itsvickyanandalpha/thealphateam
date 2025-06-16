import React from "react";
import ClientsSlider from "./ClientsSlider";


export const clientsData = [
    {
      id: 1,
      img: "/logos/c1.png",
      height: "h-[24px] lg:h-[47px]",
    },
    {
      id: 2,
      img: "/logos/c2.png",
      height: "h-[20px] lg:h-[25px]",
    },
    {
      id: 3,
      img: "/logos/c3.png",
      height: "h-[40px] lg:h-[100px]",
    },
    {
      id: 4,
      img: "/logos/c4.png",
      height: "h-[53px] lg:h-[100px]",
    },
    {
      id: 5,
      img: "/logos/c5.png",
      height: "h-[50px] lg:h-[80px]",
    },
    {
      id: 6,
      img: "/logos/c6.png",
      height: "h-[16px] lg:h-[35px]",
    },
    {
        id: 1,
        img: "/logos/c1.png",
        height: "h-[24px] lg:h-[47px]",
      },
      {
        id: 2,
        img: "/logos/c2.png",
        height: "h-[20px] lg:h-[25px]",
      },
      {
        id: 3,
        img: "/logos/c3.png",
        height: "h-[40px] lg:h-[100px]",
      },
      {
        id: 4,
        img: "/logos/c4.png",
        height: "h-[53px] lg:h-[100px]",
      },
      {
        id: 5,
        img: "/logos/c5.png",
        height: "h-[50px] lg:h-[80px]",
      },
      {
        id: 6,
        img: "/logos/c6.png",
        height: "h-[16px] lg:h-[35px]",
      },
  ];
  
  

const Section2 = () => {
  return (
    <div className="w-screen h-[45vh] bg-[#121212] flex flex-col items-center justify-center text-white uppercase">
       {/* <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-widest text-center">Clients we have worked for</div> */}
       {/* <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-widest text-center">Clients we have worked for</div> */}
       <ClientsSlider data={clientsData}/>
    </div>
  );
};

export default Section2;
