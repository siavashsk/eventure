import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Button from "../Button";
import { ReactNode } from "react";

interface ITooltip {
  children: ReactNode;
  content?: string;
  variant: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ children, content, variant }: ITooltip) {
  return (
    <div id="tooltip" className="group relative cursor-pointer">
      <div className="mx-2">{children}</div>
      <span
        className={twMerge(
          "bg-primary-white text-primary-main absolute hidden whitespace-nowrap rounded-md p-1 text-xs group-hover:inline-block",
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
        <p className="text-md my-2">{content}</p>
        <Button className="w-28">Label</Button>
      </span>
      <span
        className={twMerge(
          "absolute hidden border-[6px] group-hover:inline-block",
          variant == "top"
            ? "border-t-primary-white bottom-full left-1/2 -translate-x-1/2 border-b-0 border-l-transparent border-r-transparent"
            : "",
          variant == "bottom"
            ? "border-b-primary-white left-1/2 top-full -translate-x-1/2 border-t-0 border-l-transparent border-r-transparent"
            : "",
          variant == "left"
            ? "border-l-primary-white right-full top-1/2 -translate-y-1/2 border-r-0 border-b-transparent border-t-transparent"
            : "",
          variant == "right"
            ? "border-r-primary-white left-full top-1/2 -translate-y-1/2 border-l-0 border-b-transparent border-t-transparent"
            : "",
        )}
      ></span>
    </div>
  );
}

Tooltip.propTypes = {
  variant: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
