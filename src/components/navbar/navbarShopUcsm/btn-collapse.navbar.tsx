import { ButtonHTMLAttributes } from "react";

interface BtnCollapse extends ButtonHTMLAttributes<HTMLButtonElement> {
  span?: string;
}
export const BtnCollapse = ({ children, ...props }: BtnCollapse) => {
  return (
    <button
      data-collapse-toggle="navbar-multi-level"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none text-gray-900 hover:bg-[#6ca636]"
      aria-controls="navbar-multi-level"
      aria-expanded="false"
      {...props}
    >
      <span className="sr-only">{props.span}</span>
      {children}
    </button>
  );
};
