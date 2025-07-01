import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useScrollWhenInView = () => {
  const [scrollValue, setScrollValue] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        setScrollValue(window.scrollY);
      } else {
        setScrollValue(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  return { ref, scrollValue, inView };
};

export default useScrollWhenInView;
