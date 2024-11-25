import React from "react";

type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

interface TabsProps {
  tabs: Tab[];
  onTabClick: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabClick }) => {
  return (
    <div className="rounded-lg bg-white py-3 pl-4 pr-8 shadow-lg dark:border-strokedark dark:bg-blacksection">
      <div className="relative right-0">
        <ul
          className="relative flex list-none flex-wrap rounded-md bg-slate-100 dark:bg-blacksection px-1.5 py-1.5"
          data-tabs="tabs"
          role="list"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="z-30 flex-auto text-center">
              <button
                className={`z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-md border-0 px-0 py-2 text-sm transition-all ease-in-out ${
                  tab.isActive
                    ? "bg-primary text-white shadow-md"
                    : "bg-inherit text-strokedark dark:text-white"
                }`}
                data-tab-target={tab.id}
                role="tab"
                aria-selected={tab.isActive}
                onClick={() => onTabClick(tab.id)}
              >
                <span className="mr-1.5 h-4 w-4">{tab.icon}</span>
                <span className="ml-1">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
