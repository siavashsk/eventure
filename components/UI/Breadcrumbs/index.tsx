import React from "react";

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
  separator?: string;
  className?: string;
  itemClassName?: string;
  separatorClassName?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = "/",
  className = "",
  itemClassName = "",
  separatorClassName = "",
}) => {
  return (
    <nav aria-label="breadcrumb" className={`w-max ${className}`}>
      <ol className="flex w-full flex-wrap items-center rounded-md bg-transparent px-4 py-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex cursor-pointer items-center text-md text-black transition-colors duration-300 hover:text-slate-800 dark:text-white ${itemClassName}`}
          >
            <a href={item.href}>{item.label}</a>
            {index < items.length - 1 && (
              <span
                className={`pointer-events-none mx-2 text-black dark:text-white ${separatorClassName}`}
              >
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
