import { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";
import { cn } from "../../lib/cn";

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
