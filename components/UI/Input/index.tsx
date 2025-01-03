import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(`
    flex rounded-md border border-transparent bg-neutral-200 px-3 py-2 text-md file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50
    `)}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
