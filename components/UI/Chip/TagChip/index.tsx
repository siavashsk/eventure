import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { BiCheck, BiMessageRoundedAdd } from "react-icons/bi";

interface ITagChip {
  variant: "gray" | "surface";
  className?: string;
  add?: boolean;
  children: ReactNode;
}

export function TagChip({ variant, className, add, children }: ITagChip) {
  return (
    <div
      className={twMerge(
        `flex w-32 items-center justify-around rounded-xl p-2 ${
          (variant == "gray" && "bg-gray-400") ||
          (variant == "surface" && "bg-slate-100")
        }`,
        className,
      )}
    >
      {add ? <BiMessageRoundedAdd /> : <BiCheck />}
      {children}
    </div>
  );
}
