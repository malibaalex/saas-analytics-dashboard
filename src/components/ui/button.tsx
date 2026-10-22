import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { buttonVariants, type ButtonVariantsProps } from "./button-variants";
import React from "react";

/** Standard shadcn-style className merger */
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantsProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
