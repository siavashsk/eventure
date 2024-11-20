"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  size?: "sm" | "lg";
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ size = "sm", className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={twMerge("relative", className)}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="peer sr-only opacity-0"
        id="switch1"
      />
      <label
        htmlFor="switch1"
        className={twMerge(
          `relative flex cursor-pointer items-center rounded-full border outline-0 transition-colors before:rounded-full before:shadow before:transition-transform before:duration-300`,
          size === "lg"
            ? "h-[31px] w-[52px] before:h-[30px] before:w-[30px] before:-translate-x-0 peer-checked:before:translate-x-[21px]"
            : "h-[24px] w-[39px] before:h-[22px] before:w-[22px] before:-translate-x-0 peer-checked:before:translate-x-[16px]",
          "bg-indigo-0 border-primary-700 before:bg-indigo-500 peer-checked:bg-indigo-500 peer-checked:before:bg-gray-100",
        )}
      ></label>
    </div>
  );
};

export default Switch;
