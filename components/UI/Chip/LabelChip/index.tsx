import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { BiCross, BiLocationPlus, BiUser } from "react-icons/bi";

interface ILabelChip {
  variant: "gray" | "white";
  className?: string;
  children: ReactNode;
  location?: boolean;
  profile?: boolean;
  cross?: boolean;
}

export function LabelChip({
  variant,
  className,
  children,
  location,
  profile,
  cross,
}: ILabelChip) {
  return (
    <div
      className={twMerge(
        `flex items-center justify-around rounded-full p-2 ${
          (variant == "gray" && "bg-gray-500") ||
          (variant == "white" && "bg-white")
        }`,
        className,
      )}
    >
      {location && !profile && <BiLocationPlus />}
      {profile && !location && <BiUser />}
      {children}
      {cross && <BiCross />}
    </div>
  );
}
