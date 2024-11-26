import React from "react";

interface BadgeProps {
  count: number;
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
  position?: "top-right";
}

const Badge: React.FC<BadgeProps> = ({
  count,
  children,
  color = "bg-red-600",
  size = "sm",
  position = "top-right",
}) => {
  const sizeClasses = {
    sm: "min-h-[24px] min-w-[24px] text-xs",
    md: "min-h-[28px] min-w-[28px] text-sm",
    lg: "min-h-[32px] min-w-[32px] text-base",
  };

  const positionClasses = {
    "top-right": "top-0.5 right-0.5 translate-x-2/4 -translate-y-2/4",
  };

  return (
    <div className="relative inline-flex">
      {children}
      <span
        className={`absolute ${positionClasses[position]} grid place-items-center rounded-full ${color} px-1 py-1 ${sizeClasses[size]} text-white`}
      >
        {count}
      </span>
    </div>
  );
};

export default Badge;
