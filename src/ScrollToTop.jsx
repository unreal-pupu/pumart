import React, { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex items-center justify-center bg-[#d45d35] rounded-lg transition-all duration-200 ease-out w-16 h-16 hover:bg-[#104147]"
      >
        <MdArrowUpward className="text-white text-4xl transition-transform duration-200 ease-out hover:-translate-y-1" />
      </button>
    )
  );
};

export default ScrollToTop;