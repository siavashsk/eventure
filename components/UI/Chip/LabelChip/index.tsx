import { twMerge } from "tailwind-merge";
import locationIcon from "@/assets/icons/chips/Map_Point.svg";
import crossIcon from "@/assets/icons/chips/Close.svg";
import profileIcon from "@/assets/icons/chips/Avatar.svg";
import Image from "next/image";
import { ReactNode } from "react";

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
          (variant == "gray" && "bg-primary-container") ||
          (variant == "white" && "bg-white")
        }`,
        className,
      )}
    >
      {location && !profile && (
        <Image src={locationIcon} alt="lcoation" width={20} />
      )}
      {profile && !location && (
        <Image src={profileIcon} alt="profile" width={30} />
      )}
      {children}
      {cross && <Image src={crossIcon} alt="close" width={20} />}
    </div>
  );
}
