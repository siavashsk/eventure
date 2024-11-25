import React from "react";
import { FaTachometerAlt, FaChartBar, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

interface SidebarProps {
  children?: React.ReactNode;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  collapsible?: boolean;
  subItems?: { title: string }[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  collapsible = false,
  subItems = [],
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="relative block w-full">
      <div
        role="button"
        className="active:text-whiteflex w-full items-center rounded-lg p-0 text-start leading-tight outline-none transition-all  active:bg-primary active:text-white"
        onClick={toggleCollapse}
      >
        <button
          type="button"
          className="font-sans flex w-full select-none items-center justify-between rounded-md p-3 text-left text-xl font-semibold leading-snug antialiased transition-colors hover:bg-zinc-700"
        >
          <div className="mr-4 grid place-items-center text-white">{icon}</div>
          <p className="font-sans mr-auto block text-base font-normal leading-relaxed text-white antialiased">
            {title}
          </p>
          {collapsible && (
            <span className="ml-4">
              {isCollapsed ? (
                <MdKeyboardArrowRight className="mx-auto h-6 w-6 text-white transition-transform" />
              ) : (
                <MdKeyboardArrowDown className="mx-auto h-6 w-6 text-white transition-transform" />
              )}
            </span>
          )}
        </button>
      </div>
      {collapsible && isCollapsed && (
        <div className="overflow-hidden">
          <div className="font-sans block w-full py-1 text-sm font-light leading-normal antialiased">
            <nav className="font-sans text-blue-gray-700 flex min-w-[240px] flex-col gap-1 p-0 text-base font-normal">
              {subItems.map((subItem, index) => (
                <div
                  key={index}
                  role="button"
                  className="flex w-full items-center rounded-lg p-3 pl-8 text-start leading-tight text-white outline-none transition-all hover:bg-zinc-700 active:bg-opacity-80"
                >
                  <div className="mr-4 grid place-items-center text-white">
                    {icon}
                  </div>
                  <p className="font-sans mr-auto block text-base font-normal leading-relaxed text-black antialiased dark:text-white">
                    {subItem.title}
                  </p>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="shadow-blue-gray-900/5 g-clip-border relative flex h-full w-full max-w-[20rem] flex-col rounded-xl bg-blacksection p-4 text-gray-700 shadow-xl">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="brand"
          className="h-8 w-8"
        />
        <h5 className="font-sans block text-xl font-semibold leading-snug tracking-normal text-white antialiased">
          Sidebar
        </h5>
      </div>
      <nav className="font-sans text-blue-gray-700 flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal">
        <SidebarItem icon={<FaTachometerAlt />} title="Dashboard" />
        <SidebarItem
          icon={<FaChartBar />}
          title="Analytics"
          collapsible
          subItems={[{ title: "Reports" }, { title: "Performance" }]}
        />
        <SidebarItem
          icon={<FaShoppingCart />}
          title="E-Commerce"
          collapsible
          subItems={[{ title: "Orders" }, { title: "Products" }]}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
