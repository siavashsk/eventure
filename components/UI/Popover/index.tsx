import React, { ReactNode, useState } from "react";

interface PopoverProps {
  children: ReactNode;
  popoverContent: React.ReactNode;
  popoverClassName?: string;
}

const Popover: React.FC<PopoverProps> = ({
  children,
  popoverContent,
  popoverClassName = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isVisible && (
        <div
          className={`font-sans shadow-blue-gray-500/10 absolute mt-2 w-max whitespace-normal break-words rounded-lg bg-stroke p-4 text-sm font-normal text-titlebgdark shadow-lg focus:outline-none dark:bg-blacksection dark:text-white ${popoverClassName}`}
        >
          {popoverContent}
        </div>
      )}
    </div>
  );
};

export default Popover;
