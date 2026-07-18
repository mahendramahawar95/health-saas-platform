import { ReactNode, HTMLAttributes } from "react";
import { cn } from "./lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
  image?: ReactNode;
}

export function Card({
  title,
  description,
  footer,
  image,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl cursor-pointer border border-border bg-card text-card-foreground shadow-sm p-6 duration-300 hover:shadow-md hover:scale-[1.01] transition-transform",
        className,
      )}
      {...props}
    >
      {image && <div className="mb-4">{image}</div>}
      {(title || description) && (
        <div className="flex flex-col space-y-1.5 mb-4">
          {title && (
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      {children && <div>{children}</div>}

      {footer && (
        <div className="mt-4 pt-4 border-t border-border">{footer}</div>
      )}
    </div>
  );
}
