import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaCheck } from "react-icons/fa6";
import { IoClose, IoWarningOutline, IoBan } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";

interface ToastProps {
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  duration?: number;
  showIcon?: boolean;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  variant = "info",
  position = "top-right",
  duration = 3000,
  showIcon = true,
  onClose,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / duration) * 100;
        if (newProgress >= 100) {
          clearInterval(interval);
          onClose?.();
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  const variantStyles: Record<string, string> = {
    success: "bg-green-500 text-white border-green-700",
    error: "bg-red-500 text-white border-red-700",
    warning: "bg-yellow-400 text-black border-yellow-600",
    info: "bg-blue-500 text-white border-blue-700",
  };

  const positionStyles: Record<string, string> = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const variantIcons: Record<string, React.ReactNode> = {
    success: <FaCheck />,
    error: <IoBan />,
    warning: <IoWarningOutline />,
    info: <LuInfo />,
  };

  return (
    <div
      className={twMerge(
        "fixed z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg",
        variantStyles[variant],
        positionStyles[position],
      )}
    >
      {showIcon && <div className="text-xl">{variantIcons[variant]}</div>}
      <span className="text-md">{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-lg font-bold hover:text-opacity-80"
      >
        <IoClose />
      </button>
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-1 w-full bg-white"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
};

export default Toast;
