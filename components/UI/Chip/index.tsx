import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { BiUser, BiCheck } from "react-icons/bi";
import { IoLocationSharp, IoClose } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

interface ChipProps {
  variant?: "gray" | "primary" | "surface";
  className?: string;
  children: ReactNode;
  location?: boolean;
  profile?: boolean;
  cross?: boolean;
  add?: boolean;
  onRemove?: () => void;
}

const Chip: React.FC = ({
  variant = "primary",
  className,
  children,
  location,
  profile,
  cross,
  add,
  onRemove,
}: ChipProps) => {
  return (
    <div
      className={twMerge(
        `flex items-center justify-around rounded-full p-2 ${
          (variant === "gray" && "bg-gray-500 text-white") ||
          (variant === "primary" && "bg-indigo-500 text-white") ||
          (variant === "surface" && "bg-slate-100")
        }`,
        className,
      )}
    >
      {location && !profile && <IoLocationSharp />}
      {profile && !location && <BiUser />}
      {add && <IoIosAdd />}
      {!add && !location && !profile && !cross && <BiCheck />}
      {children}
      {cross && <IoClose className="cursor-pointer" onClick={onRemove} />}
    </div>
  );
};
export default Chip;
