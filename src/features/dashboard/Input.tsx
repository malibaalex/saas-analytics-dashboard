import { forwardRef, type InputHTMLAttributes } from "react";
import cn from "../../lib/c";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ invalid, className, ...props }, ref) => (
  <input
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(
      "h-10 w-full rounded-full border border-transparent bg-muted px-4 text-sm text-foreground",
      "placeholder:text-muted-foreground outline-none transition-colors",
      "hover:border-border focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-primary/40",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export default Input;
