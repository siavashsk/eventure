import { useClickOutside } from "@/hooks/useClickOutside";
import React, { useState, useRef } from "react";

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

  useClickOutside(speedDialRef, () => setIsOpen(!isOpen));

  return (
    <div className="relative h-[100%] w-full">
      <div className="fixed bottom-0 right-0 p-8">
        <div>
          <button
            className="font-sans relative h-14 max-h-[56px] w-14 max-w-[56px] select-none rounded-full bg-blacksection text-center align-middle text-sm font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                aria-hidden="true"
                className={`h-6 w-6 transition-transform ${
                  isOpen && "rotate-45"
                }`}
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
            <div
              className="absolute left-[25px] top-[-190px] w-max flex-col items-center gap-1"
              ref={speedDialRef}
            >
              {buttons.map((button, index) => (
                <div key={index} data-projection-id={index}>
                  <button
                    onClick={button.action}
                    className="m-0.5 flex h-16 min-h-[48px] w-16 min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border-0 bg-primary p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-primaryho focus:scale-110 active:scale-100"
                  >
                    {button.icon}
                    <p className="font-sans block text-xs font-normal text-white antialiased">
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
