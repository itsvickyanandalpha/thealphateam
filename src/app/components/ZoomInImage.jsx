import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ZoomInImage = ({ src, alt, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="overflow-hidden inline-block">
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </div>
  );
};

export default ZoomInImage;
