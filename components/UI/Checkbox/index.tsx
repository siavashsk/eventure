import React, { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  id?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id = "checkbox",
  checked,
  onChange,
  className,
  ...rest
}) => {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor={id}
      >
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className={`checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500 border-primary-onContainer before:bg-primary-onContainer2 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 
          before:-translate-y-2/4 before:rounded-full before:opacity-0 
          before:transition-opacity hover:before:opacity-10
          ${className || ""}`}
          {...rest}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="#fff"
            stroke="#fff"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      {label && <span className="ml-2">{label}</span>}
    </div>
  );
};
