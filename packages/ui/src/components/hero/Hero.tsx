import { ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface HeroProps {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  image?: ReactNode;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
}

export function Hero({
  badge,
  title,
  description,
  actions,
  image,
  className,
  contentClassName,
  imageClassName,
}: HeroProps) {
  return (
    <section className={cn("bg-background w-full", className)}>
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={cn("space-y-6 ", contentClassName)}>
            {badge}

            <h1 className="text-display text-white -0.5rem font-bold line-height-0 uppercase tracking-tight ">
              {title}
            </h1>

            {description && (
              <p className="text-lg text-primary text-muted-foreground">
                {description}
              </p>
            )}

            {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
          </div>

          {image && (
            <div className={cn("flex justify-center", imageClassName)}>
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
