"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const TextAnimator = ({ children, className = "", delay = 0 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      if (inView) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, delay, ease: "easeOut" },
        });
      } else {
        controls.start({
          y: 50, // Start 20px below
          opacity: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      }
    }
  }, [inView, controls, delay, hasMounted]);

  if (!hasMounted) return null;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimator;
