// src/components/common/Button.jsx
import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-block px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300 transform";

  const variants = {
    primary:
      "bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105",
    dark: "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105",
    light: "bg-white text-gray-900 hover:bg-gray-100 hover:scale-105",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
