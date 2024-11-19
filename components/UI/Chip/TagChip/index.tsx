import Image from "next/image";
import { twMerge } from "tailwind-merge";
import addIcon from "@/assets/icons/chips/Plus.svg"
import checkIcon from "@/assets/icons/chips/Check.svg"

export function TagChip({ variant, className, add, children }) {
  return (
    <div
      className={twMerge(
        `rounded-xl flex justify-around items-center p-2 w-32 ${
          (variant == "gray" && "bg-primary-container") ||
          (variant == "surface" && "bg-surface-light")
        }`,
        className
      )}
    >
      {add ? (
        <Image src={addIcon} alt="add" width={20} />
      ) : (
        <Image src={checkIcon} alt="check" width={20} />
      )}
      {children}
    </div>
  );
}
