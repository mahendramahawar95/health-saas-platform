import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    gap-xs
    rounded-md
    font-medium
    shadow-card
    transition-transform
    hover:-translate-y-0.5
    disabled:pointer-events-none
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-primary
          text-background
        `,

        secondary: `
          bg-secondary
          text-foreground
        `,

        outline: `
          border
          border-border
          bg-transparent
        `,
      },

      size: {
        sm: "px-md py-xs text-sm",
        md: "px-lg py-sm text-body",
        lg: "px-xl py-md text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
