import { useState, useEffect } from "react";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
    <Button
      onClick={scrollToTop}
      variant="outline"
      className={`fixed bottom-15 right-8 z-50 p-3!  bg-transparent text-white shadow-lg transition-all duration-300 hover:bg-brand-green! hover:scale-110  hover:border-none active:scale-95 cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <Icon name="arrow_upward" />
    </Button>
  );
};

export default ScrollToTop;
