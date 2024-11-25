import React from "react";
import { IconType } from "react-icons";

interface TimelineItemProps {
  icon: IconType;
  iconBgColor: string;
  iconTextColor: string;
  title: string;
  description: string;
  date: string;
}
interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="">
      <div className="w-[25rem]">
        <ul className="flex w-full flex-col">
          {items.map((item, index) => (
            <li key={index} className="relative flex flex-col gap-4 pb-6">
              <span className="absolute left-0 grid !w-[78px] justify-center bg-transparent transition-opacity duration-200">
                <span className="bg-blue-gray-100 h-full w-0.5"></span>
              </span>
              <div className="border-blue-gray-50 shadow-blue-gray-900/5 relative flex items-center gap-4 rounded-xl border-t border-stroke bg-white py-3 pl-4 pr-8 shadow-lg dark:border-strokedark dark:bg-blacksection">
                <span
                  className={`relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-3 ${item.iconBgColor} ${item.iconTextColor}`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h6 className="font-sans block text-base font-semibold leading-relaxed tracking-normal text-black antialiased dark:text-white">
                    {item.title}
                  </h6>
                  <p className="font-sans block text-sm font-normal leading-normal text-gray-500 antialiased">
                    {item.description}
                  </p>
                  <p className="font-sans block text-sm font-normal leading-normal text-gray-500 antialiased">
                    {item.date}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
