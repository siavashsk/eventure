import React from "react";
import { twMerge } from "tailwind-merge";

interface IRadio {
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  className?: string;
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<IRadio> = ({
  name,
  label,
  value,
  checked,
  className,
  id,
  onChange,
}) => {
  return (
    <div className={twMerge("inline-flex items-center", className)}>
      <label className="relative flex cursor-pointer items-center" htmlFor={id}>
        <input
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-slate-400"
          id={id}
        />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-500 opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
      </label>
      {label && (
        <label
          className="ml-2 cursor-pointer text-sm"
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
