import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<Props> = ({ icon: Icon, label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        text-md flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 font-medium text-neutral-400 transition hover:text-white
    `,
        active && "text-white",
      )}
    >
      <Icon size={26} />
      <p className="w-full truncate">{label}</p>
    </Link>
  );
};

export default SidebarItem;
