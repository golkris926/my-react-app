import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderButton = ({ direction, onClick, ariaLabel }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === "left" ? "left-2 md:left-8" : "right-2 md:right-8"
        } top-1/2 transform -translate-y-1/2 
        bg-white/20 backdrop-blur-sm hover:bg-white/40 
        text-white p-3 rounded-full 
        transition-all duration-300 hover:scale-110 z-30 group`}
      aria-label={ariaLabel}
    >
      <Icon size={24} className="group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default SliderButton;
