import React, { useState } from "react";

// AccordionItem Component
const AccordionItem = ({
  index,
  title,
  content,
  isOpen,
  toggleAccordion,
}: any) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => toggleAccordion(index)}
        className="flex w-full items-center justify-between py-5 text-white"
      >
        <span>{title}</span>
        <span
          className={`text-slate-800 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : ""
        }`}
      >
        <div className="pb-5 text-sm text-slate-500">{content}</div>
      </div>
    </div>
  );
};

// Parent Accordion Component
const Accordion = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item: any, index: number) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
