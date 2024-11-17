import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
  h-fit w-full rounded-lg bg-neutral-900
  `,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Box;
