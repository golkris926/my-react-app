// src/components/common/DotButton.jsx
import React from "react";

const DotButton = ({ active, onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        active
          ? "bg-gray-800 scale-125"
          : "bg-gray-400 hover:bg-gray-600 hover:scale-110"
      }`}
    />
  );
};

export default DotButton;