import React from "react";
import { twMerge } from "tailwind-merge";

type SkeletonType = "video" | "image" | "title" | "desc" | "icon";

interface SkeletonProps {
  type: SkeletonType;
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  type,
  width,
  height,
  className,
}) => {
  const baseClasses = "bg-manatee animate-pulse rounded";

  const getSkeletonStyle = () => {
    switch (type) {
      case "video":
        return { width: width || "100%", height: height || "180px" };
      case "image":
        return { width: width || "100%", height: height || "100px" };
      case "title":
        return { width: width || "100%", height: height || "20px" };
      case "desc":
        return { width: width || "100%", height: height || "16px" };
      case "icon":
        return { width: width || "100%", height: height || "40px" };
      default:
        return {};
    }
  };

  return (
    <div
      className={twMerge(baseClasses, className)}
      style={getSkeletonStyle()}
    />
  );
};

export default Skeleton;
