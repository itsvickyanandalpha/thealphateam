// import { AnimatePresence, motion } from "framer-motion";

// import { useEffect, useState } from "react";

// import { cn } from "../../lib/utils";

// const ImageRotate = ({ imgs, duration = 2500, delay, className }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
//     }, duration);

//     // Clean up interval on unmount
//     return () => clearInterval(interval);
//   }, [imgs, duration]);

//   return (
//     <div className="overflow-hidden py-2">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={imgs[index].id}
//           src={imgs[index].img}
//           width={200}
//           height={100}
//           initial={{ y: -65 }}
//           animate={{ y: 0 }}
//           exit={{ y: 65 }}
//           transition={{ duration: 0.25, ease: "easeOut", delay: delay }}
//           className={cn(className, "w-auto bg-cover")}
//         />
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ImageRotate;



import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";


const ImageRotate = ({ imgs, duration = 2500, delay = 0, className, screenSize }) => {
  const [index, setIndex] = useState(0);
  const {width} = screenSize;
  let containerWidth;
  let containerHeight;
  
  if (width >= 1200) { // Large desktops
    containerWidth = 250;
    containerHeight = 180;
  } else if (width >= 1024) { // Small desktops / large tablets
    containerWidth = 240;
    containerHeight = 180;
  } else if (width >= 768) { // Tablets
    containerWidth = 210;
    containerHeight = 160;
  } else if (width >= 680) { // Large mobiles
    containerWidth = 250;
    containerHeight = 200;
  } else if (width >= 500) { // Small mobiles
    containerWidth = 110;
    containerHeight = 90;
  }
  else if (width >= 300){ // Small mobiles
    containerWidth = 130;
    containerHeight = 100;
  }
  else{
    containerWidth = 130;
    containerHeight = 100;
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, duration);
    return () => clearInterval(interval);
  }, [imgs.length, duration]);

  return (
    // <div className="relative w-[300px] h-[160px] overflow-hidden ">
    //   <AnimatePresence mode="wait">
    //     <motion.img
    //       key={imgs[index].id}
    //       src={imgs[index].img}
    //       width={300}
    //       height={100}
    //       initial={{ y: 100, opacity: 0 }} // starts above
    //       animate={{ y: 0, opacity: 1 }}    // slides to center
    //       exit={{ y: -100, opacity: 0 }}     // exits down
    //       transition={{ duration: 0.5, ease: "easeInOut", delay }}
    //       className={cn(className, "absolute top-0 left-0 w-full h-full object-contain")}
    //     />
    //   </AnimatePresence>
    // </div>
    <div className={`relative overflow-hidden`} style={{ width: containerWidth, height: containerHeight }}>
    <AnimatePresence mode="wait">
      <motion.img
        key={imgs[index].id}
        src={imgs[index].img}
        width={containerWidth}
        height={containerHeight}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay }}
        className={cn(className, "absolute top-0 left-0 w-full h-full object-contain")}
      />
    </AnimatePresence>
  </div>
  );
};

export default ImageRotate;
