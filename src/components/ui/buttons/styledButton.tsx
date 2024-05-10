import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  option?: "primary" | "secondary" | "tertiary" | "onlyIcon";
  icon?: { element?: JSX.Element | null; direction?: "right" | "left" };
}

export const StyledButton = ({ className, children, ...props }: IButton) => {
  const validateClasses = validateOptions(props.option ?? "");
  const twClass =
    "font-normal rounded-lg md:text-base text-sm px-6 py-2 text-center hover:bg-gray-200 inline-flex gap-2 group justify-center items-center";

  return (
    <button className={twMerge(twClass, validateClasses, className)} {...props}>
      {props.icon?.element &&
        props.icon.direction === "left" &&
        props.icon.element}
      {children}
      {props.icon?.element &&
        props.icon.direction === "right" &&
        props.icon.element}
    </button>
  );
};

function validateOptions(option: string) {
  let className = "";
  switch (option) {
    case "primary":
      className = "text-white bg-primary-700 hover:bg-primary-800";
      return className;
    case "secondary":
      className = "bg-transparent rounded-lg hover:bg-secondary-400 text-white";
      return className;
    case "tertiary":
      className = "rounded-lg bg-tertiary-500 hover:bg-tertiary-400 text-white";
      return className;
    case "onlyIcon":
      className = "p-2 w-10 h-10";
      return className;
    default:
      return;
  }
}
