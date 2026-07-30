import { ButtonProps, ButtonAsAnchor, ButtonAsButton } from "./button.types";
import { buttonVariants } from "./button.variants";
import { cn } from "../../lib/cn";
import { Loader2 } from "lucide-react";

export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href !== undefined) {
    return <a className={classes} {...(props as ButtonAsAnchor)} />;
  }

  const { isLoading, loadingText, disabled, children, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...buttonProps}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-icon animate-spin" aria-hidden="true" />
          {loadingText ?? "Submitting..."}
        </>
      ) : (
        children
      )}
    </button>
  );
}
