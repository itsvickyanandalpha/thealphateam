// import Image from "next/image";
// import ImageRotate from "./animations/image-rotate";
// import { cn } from "../lib/utils";
// import { useEffect, useState } from "react";

// const ClientsSlider = ({ data }) => {

//   const [screenSize, setScreenSize] = useState({
//     width: window?.innerWidth||0,
//     height: window?.innerHeight||0
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenSize({
//         width: window?.innerWidth,
//         height: window?.innerHeight
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     // Call it initially in case the component mounts after window resize
//     handleResize();

//     // Cleanup to avoid memory leaks
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);


//   return (
//     <div className="relative z-10 bg-transparent flex flex-col items-center justify-center">
//       {/* <div className="flex flex-col items-center">
//         <h1 className="title text-center text-2xl lg:text-3xl">Clients we have worked for</h1>
//       </div> */}
//       <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-widest text-center">
//         Clients we have worked for
//       </div>

//       <div className="container mt-0 flex w-11/12 justify-center ">
//         {/* <div className=" hidden w-full grid-cols-2 items-center justify-center justify-items-center gap-10 pb-12 lg:grid lg:h-[100px] lg:grid-cols-4 lg:gap-32 lg:pb-24">
//           <ImageRotate imgs={data.slice(0, 3)} delay={0} />
//           <ImageRotate imgs={data.slice(3, 6)} delay={0} />
//           <ImageRotate imgs={data.slice(6, 9)} delay={0} />
//           <ImageRotate imgs={data.slice(9, 12)} delay={0} />
//           <ImageRotate imgs={data.slice(12, 15)} delay={0} />
//           <ImageRotate imgs={data.slice(15, 18)} delay={0} />
//         </div> */}
//         {/* <div className="w-screen px-[0px] overflow-x-auto">
//           <div className="flex flex-nowrap gap-20">
//             <ImageRotate imgs={data.slice(0, 3)} delay={0} />
//             <ImageRotate imgs={data.slice(3, 6)} delay={0} />
//             <ImageRotate imgs={data.slice(6, 9)} delay={0} />
//             <ImageRotate imgs={data.slice(9, 12)} delay={0} />
//             <ImageRotate imgs={data.slice(12, 15)} delay={0} />
//             <ImageRotate imgs={data.slice(15, 18)} delay={0} />
//           </div>
//         </div> */}

//         <div className="w-full px-[0px] overflow-x-auto pt-10">
//           {screenSize.width>1024? (
//             <div className="flex flex-nowrap gap-20">
//               <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(9, 12)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(12, 15)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(15, 18)} delay={0} screenSize={screenSize}/>
//             </div>
//           ) : (screenSize.width >= 740 && screenSize.width < 1024) ? (
//             <div className="flex flex-nowrap gap-20">
//               <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(9, 12)} delay={0} screenSize={screenSize}/>
//             </div>
//           ) : (screenSize.width >= 500 && screenSize.width < 740) ? (
//             <div className="flex flex-nowrap gap-20">
//               <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize}/>
//               {/* <ImageRotate imgs={data.slice(9, 12)} delay={0} screenSize={screenSize}/> */}
//             </div>
//           ) : (
//             <div className="flex flex-nowrap gap-20">
//               <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize}/>
//               <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize}/>
//               {/* <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize}/> */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientsSlider;



import { useEffect, useState } from "react";
import Image from "next/image";
import ImageRotate from "./animations/image-rotate";
import { cn } from "../lib/utils";

const ClientsSlider = ({ data }) => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial size on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optional: Don't render until window object exists
  if (screenSize.width === 0) return null;

  return (
    <div className="relative z-10 bg-transparent flex flex-col items-center justify-center">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-widest text-center">
        Clients we have worked for
      </div>

      <div className="container mt-0 flex w-11/12 justify-center">
        <div className="w-full px-[0px] overflow-x-auto pt-10">
          {screenSize.width > 1024 ? (
            <div className="flex flex-nowrap gap-20">
              <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(9, 12)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(12, 15)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(15, 18)} delay={0} screenSize={screenSize} />
            </div>
          ) : screenSize.width >= 740 && screenSize.width < 1024 ? (
            <div className="flex flex-nowrap gap-20">
              <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(9, 12)} delay={0} screenSize={screenSize} />
            </div>
          ) : screenSize.width >= 500 && screenSize.width < 740 ? (
            <div className="flex flex-nowrap gap-20">
              <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(6, 9)} delay={0} screenSize={screenSize} />
            </div>
          ) : (
            <div className="flex flex-nowrap gap-20">
              <ImageRotate imgs={data.slice(0, 3)} delay={0} screenSize={screenSize} />
              <ImageRotate imgs={data.slice(3, 6)} delay={0} screenSize={screenSize} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientsSlider;
