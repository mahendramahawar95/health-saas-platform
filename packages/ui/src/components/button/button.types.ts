import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.variants";

type BaseProps = VariantProps<typeof buttonVariants>;

export type ButtonAsButton = BaseProps & {
  href?: undefined;
  isLoading?: boolean;
  loadingText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonAsAnchor = BaseProps & {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
