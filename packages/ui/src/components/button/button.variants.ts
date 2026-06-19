import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    font-medium
    transition-all
    disabled:pointer-events-none
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-primary
          text-white
          hover:opacity-90
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
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
