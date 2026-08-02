import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "../components/badge/badge";

interface DoctorHeaderProps {
  name: string;
  designation: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
}

export function DoctorHeader({
  name,
  designation,
  image,
  rating,
  reviewCount,
  tags,
}: DoctorHeaderProps) {
  return (
    <div className="flex flex-col gap-md rounded-lg border border-border bg-surface p-lg shadow-card sm:flex-row sm:items-start">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-secondary sm:size-32">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-xs">
        <h1 className="text-h3 font-semibold text-foreground">{name}</h1>
        <p className="text-body-lg text-content-secondary">{designation}</p>

        {rating !== undefined && (
          <div className="flex items-center gap-xs text-small text-content-secondary">
            <Star
              className="size-4 fill-warning text-warning"
              aria-hidden="true"
            />
            <span className="font-medium text-foreground">{rating}</span>
            {reviewCount !== undefined && <span>({reviewCount} reviews)</span>}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-xs flex flex-wrap gap-xs">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-xs font-medium bg-badge-tag text-primary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
