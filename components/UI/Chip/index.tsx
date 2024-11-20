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

const Chip: React.FC<ChipProps> = ({
  variant = "primary",
  className,
  children,
  location,
  profile,
  cross,
  add,
  onRemove,
}) => {
  return (
    <div
      className={twMerge(
        `inline-block rounded-full p-2 ${
          (variant === "gray" && "bg-gray-500 text-white") ||
          (variant === "primary" && "bg-indigo-500 text-white") ||
          (variant === "surface" && "bg-slate-100")
        }`,
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 px-2">
        {location && !profile && <IoLocationSharp />}
        {profile && !location && <BiUser />}
        {add && <IoIosAdd size={23}/>}
        {!add && !location && !profile && !cross && <BiCheck size={22} />}
        {children}
        {cross && <IoClose size={22} className="cursor-pointer" onClick={onRemove} />}
      </div>
    </div>
  );
};
export default Chip;
