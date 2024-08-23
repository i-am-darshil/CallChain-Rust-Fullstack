import React from "react";

const Tab = ({ index, label, isActive, onClick }) => {
  return (
    <button
      className={`py-2 px-4 ${
        isActive ? "bg-[#44475A]" : "bg-[#1a1a2e]"
      } hover:bg-[#44475A] focus:outline-none`}
      onClick={() => onClick(index)}
    >
      {label}
    </button>
  );
};

export default Tab;
