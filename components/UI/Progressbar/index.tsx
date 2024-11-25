import React from "react";

interface ProgressProps {
  label?: string;
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({
  label = "Progress",
  percentage,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <h6 className="font-sans text-blue-gray-900 block text-base font-semibold leading-relaxed tracking-normal antialiased">
          {label}
        </h6>
        <h6 className="font-sans text-blue-gray-900 block text-base font-semibold leading-relaxed tracking-normal antialiased">
          {percentage}%
        </h6>
      </div>

      <div
        className={`flex-start font-sans flex h-2.5 w-full overflow-hidden rounded-full bg-manatee text-xs font-medium dark:bg-blacksection`}
      >
        <div
          className={`flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary text-white`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
