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

const ImageRotate = ({ imgs, duration = 2500, delay = 0, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, duration);
    return () => clearInterval(interval);
  }, [imgs.length, duration]);

  return (
    <div className="relative w-[300px] h-[170px] overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgs[index].id}
          src={imgs[index].img}
          width={300}
          height={100}
          initial={{ y: -100, opacity: 0 }} // starts above
          animate={{ y: 0, opacity: 1 }}    // slides to center
          exit={{ y: 100, opacity: 0 }}     // exits down
          transition={{ duration: 0.5, ease: "easeInOut", delay }}
          className={cn(className, "absolute top-0 left-0 w-full h-full object-contain")}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageRotate;
