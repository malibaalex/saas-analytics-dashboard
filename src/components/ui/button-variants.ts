import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    // Geometry & layout
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-full font-medium select-none",
    // Motion (matches .btn-* transition)
    "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
    // Focus halo: 2px card-colored offset + variant ring (mirrors box-shadow in CSS)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Solid brand CTA — coral fill */
        primary: [
          "bg-primary text-primary-foreground border border-transparent",
          "hover:brightness-[1.08] hover:shadow-lg hover:shadow-primary/35",
          "active:brightness-90 active:scale-[0.98]",
          "focus-visible:ring-primary focus-visible:ring-offset-card",
        ].join(" "),

        /* Outlined, balanced emphasis */
        secondary: [
          "bg-transparent text-foreground border-[1.5px] border-border",
          "hover:bg-muted hover:border-muted-foreground",
          "active:bg-border active:scale-[0.98]",
          "focus-visible:ring-foreground focus-visible:ring-offset-card",
        ].join(" "),

        /* Ghost / borderless, low visual weight */
        tertiary: [
          "bg-transparent text-foreground border border-transparent",
          "hover:bg-muted",
          "active:bg-border active:scale-[0.98]",
          "focus-visible:ring-border focus-visible:ring-offset-card",
        ].join(" "),

        /* Solid "secondary token" variant from the sandbox dropdown */
        dark: [
          "bg-secondary text-secondary-foreground border border-transparent",
          "hover:brightness-[1.2]",
          "active:brightness-90 active:scale-[0.98]",
          "focus-visible:ring-secondary focus-visible:ring-offset-card",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-5 text-xs",
        default: "h-10 px-8 text-sm",
        lg: "h-12 px-10 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    compoundVariants: [
      // Reference uses tighter horizontal padding for Tertiary (px-6 vs px-8).
      // tailwind-merge in Button.tsx resolves this correctly.
      { variant: "tertiary", size: "default", class: "px-6" },
      { variant: "tertiary", size: "sm", class: "px-4" },
      { variant: "tertiary", size: "lg", class: "px-8" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
