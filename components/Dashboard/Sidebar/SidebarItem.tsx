import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<Props> = ({ icon: Icon, label, active, href }) => {
  return <Link href=""></Link>;
};

export default SidebarItem;
