import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { ReactNode } from "react";

interface ITooltip {
  children: ReactNode;
  content?: string;
  variant?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<ITooltip> = ({
  children,
  content,
  variant = "bottom",
}) => {
  return (
    <div id="tooltip" className="group relative inline-block cursor-pointer">
      <div className="mx-2">{children}</div>
      <span
        className={twMerge(
          "bg-indigo-500 text-white absolute z-10 hidden whitespace-nowrap rounded-xl p-1 text-xs shadow-lg group-hover:inline-block",
          variant === "top"
            ? "bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2"
            : "",
          variant === "bottom"
            ? "left-1/2 top-[calc(100%+5px)] -translate-x-1/2"
            : "",
          variant === "left"
            ? "right-[calc(100%+5px)] top-1/2 -translate-y-1/2"
            : "",
          variant === "right"
            ? "left-[calc(100%+5px)] top-1/2 -translate-y-1/2"
            : "",
        )}
      >
        <p className="text-sm">{content}</p>
        <Button className="w-auto">Label</Button>
      </span>
      <span
        className={twMerge(
          "absolute hidden border-[6px] group-hover:inline-block",
          variant == "top"
            ? "border-t-indigo-500 bottom-full left-1/2 -translate-x-1/2 border-b-0 border-l-transparent border-r-transparent"
            : "",
          variant == "bottom"
            ? "border-b-indigo-500 left-1/2 top-full -translate-x-1/2 border-t-0 border-l-transparent border-r-transparent"
            : "",
          variant == "left"
            ? "border-l-indigo-500 right-full top-1/2 -translate-y-1/2 border-r-0 border-b-transparent border-t-transparent"
            : "",
          variant == "right"
            ? "border-r-indigo-500 left-full top-1/2 -translate-y-1/2 border-l-0 border-b-transparent border-t-transparent"
            : "",
        )}
      ></span>
    </div>
  );
};

export default Tooltip;
