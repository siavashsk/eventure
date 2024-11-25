import React, { useState, useEffect, useRef } from "react";

type SpeedDialButton = {
  icon: React.ReactNode;
  label: string;
  action: () => void;
};

interface SpeedDialProps {
  buttons: SpeedDialButton[];
}

const SpeedDial: React.FC<SpeedDialProps> = ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const speedDialRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        speedDialRef.current &&
        !speedDialRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-[100%] w-full" ref={speedDialRef}>
      <div className="fixed bottom-0 right-0 p-8">
        <div className="group">
          <button
            className="font-sans relative h-14 max-h-[48px] w-14 max-w-[48px] select-none rounded-full bg-blacksection text-center align-middle text-sm font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                aria-hidden="true"
                className="h-5 w-5 transition-transform group-hover:rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute left-[20px] top-[-190px] w-max flex-col items-center gap-1">
              {buttons.map((button, index) => (
                <div key={index} data-projection-id={index}>
                  <button
                    onClick={button.action}
                    className="m-0.5 flex h-16 min-h-[48px] w-16 min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border-0 bg-primary hover:bg-primaryho p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100"
                  >
                    {button.icon}
                    <p className="font-sans text-white block text-xs font-normal antialiased">
                      {button.label}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeedDial;
