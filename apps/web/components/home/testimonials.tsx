"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Section,
  SectionHeading,
} from "@repo/ui";

import { Quote, Star } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The care I received was exceptional. Dr. Sharma took the time to explain everything and made me feel completely at ease.",
    name: "Ananya Verma",
    role: "Patient — Cardiology",
    rating: 5.0,
    image: "/testimonial.avif",
  },
  {
    quote:
      "Booking my appointment took less than two minutes, and the follow-up support afterward was outstanding.",
    name: "Rohan Mehta",
    role: "Patient — Orthopedics",
    rating: 5.0,
    image: "/testimonial.avif",
  },
  {
    quote:
      "From diagnosis to recovery, the entire team stood by us. I couldn't have asked for better guidance.",
    name: "Priya Nair",
    role: "Patient — Oncology",
    rating: 4.9,
    image: "/testimonial.avif",
  },
  {
    quote:
      "Dr. Kapoor's expertise and patience made a stressful situation feel manageable. Truly grateful for this hospital.",
    name: "Aditya Rao",
    role: "Patient — Neurology",
    rating: 5.0,
    image: "/testimonial.avif",
  },
  {
    quote:
      "The maternity ward staff were incredibly supportive throughout my pregnancy. Highly recommend Medicare.",
    name: "Sneha Kulkarni",
    role: "Patient — Gynecology",
    rating: 4.8,
    image: "/testimonial.avif",
  },
  {
    quote:
      "Quick diagnosis, honest advice, and a caring approach — everything you'd want from a hospital visit.",
    name: "Vikram Singh",
    role: "Patient — General Medicine",
    rating: 4.9,
    image: "/testimonial.avif",
  },
];

export default function Testimomials() {
  return (
    <Section id="testimonial" className="bg-section-first py-3xl">
      <div className="container">
        <SectionHeading
          badgeClass="bg-badge-tag p-2 text-primary font-bold"
          badgeText="Testimonials"
          heading="What our patients say"
          description="Real experiences from people who trusted our doctors with their
            care."
        />

        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((t) => (
              <CarouselItem
                key={t.name}
                className="basis-[85%] sm:basis-[50%] lg:basis-[33.330%]"
              >
                <div className="flex h-full flex-col justify-between gap-md rounded-xl border border-border bg-white p-lg">
                  <div className="flex items-center justify-between w-full">
                    <div className="rounded-full overflow-hidden border-border border-4">
                      <Image
                        src={t.image}
                        alt={t.name}
                        className="object-contain aspect-square "
                        width={60}
                        height={60}
                        priority
                      />
                    </div>
                    <Quote
                      className="size-8 text-primary/20"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-body text-foreground">{t.quote}</p>

                  <div className="flex items-center justify-between border-t border-border pt-md">
                    <div className="flex items-center gap-sm">
                      <div>
                        <h6 className="text-h6 mb-1 font-semibold text-foreground">
                          {t.name}
                        </h6>
                        <p className="text-xs text-content-secondary">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-medium text-foreground">
                      <Star
                        className="size-4 fill-warning text-warning"
                        aria-hidden="true"
                      />
                      {t.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
}
