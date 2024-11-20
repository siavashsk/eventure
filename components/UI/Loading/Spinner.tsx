import React from "react";
import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  label?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ label, className }) => {
  return (
    <div className={"flex items-center"}>
      <div
        className={twMerge(
          "inline-flex h-6 w-6 animate-spin rounded-full border-2 border-indigo-500 !border-t-transparent",
          className,
        )}
      ></div>
      {label && <span className="ml-2 text-sm text-gray-500">{label}</span>}
    </div>
  );
};

export default Spinner;
