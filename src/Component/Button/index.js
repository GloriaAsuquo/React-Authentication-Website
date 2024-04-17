import React from "react";

export default function Button({
  children,
  isDisabled,
  size = "fullwidth",
  variant = "contained",
}) {
  const getBackground = () => {
    if (variant === "contained") {
      return isDisabled
        ? "bg-blue-100 cursor-not-allowed text-white"
        : "bg-blue-500 cursor-pointer text-white";
    } else if (variant === "outlined") {
      return isDisabled
        ? "border-[2px] border-blue-100 cursor-not-allowed text-blue-500"
        : "border-[2px] border-blue-500 cursor-pointer text-blue-500";
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={`${getBackground()} rounded py-2 mt-2  capitalize
      ${
        size === "fullwidth"
          ? "w-full"
          : size === "medium"
          ? "w-1/2"
          : size === "small"
          ? "px-6"
          : ""
      } `}
    >
      {children}
    </button>
  );
}
