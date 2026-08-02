"use client";

import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { cn, type CarouselApi } from "@repo/ui";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Section,
  SectionHeading,
} from "@repo/ui";
// import { Badge } from "@repo/ui";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Doctor = {
  id: string;
  name: string;
  designation: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
};

const DOCTORS: Doctor[] = [
  {
    id: "dr-jane-smith",
    name: "Dr. Ishaan Kapoor",
    designation: "Chief Cardiologist",
    image: "/doct-1.png",
    linkedin: "#",
    twitter: "#",
    email: "mailto:ishaan.kapoor@medicare.com",
  },
  {
    id: "dr-jane-smith",
    name: "Dr. Meera Joshi",
    designation: "General Physician",
    image: "/doct-2.png",
    linkedin: "#",
    twitter: "#",
    email: "mailto:meera.joshi@medicare.com",
  },
  {
    id: "dr-jane-smith",
    name: "Dr. Arjun Malhotra",
    designation: "Head of Radiology",
    image: "/doct-3.png",
    linkedin: "#",
    twitter: "#",
    email: "mailto:arjun.malhotra@medicare.com",
  },
  {
    id: "dr-jane-smith",
    name: "Dr. Priya Nair",
    designation: "Oncology Specialist",
    image: "/doct-4.png",
    linkedin: "#",
    twitter: "#",
    email: "mailto:priya.nair@medicare.com",
  },
  {
    id: "dr-jane-smith",
    name: "Dr. Aditya Rao",
    designation: "Senior Neurologist",
    image: "/doct-5.png",
    linkedin: "#",
    email: "mailto:aditya.rao@medicare.com",
  },
  {
    id: "dr-jane-smith",
    name: "Dr. Sneha Kulkarni",
    designation: "Gynecologist",
    image: "/doct-6.png",
    linkedin: "#",
    twitter: "#",
    email: "mailto:sneha.kulkarni@medicare.com",
  },
];

export function DoctorsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect(); // set initial state
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <Section id="testimonial" className="bg-section-first py-3xl pt-0">
      <div className="container">
        <SectionHeading
          badgeClass="bg-badge-tag p-2 text-primary font-bold"
          badgeText="Our Doctors"
          heading="Meet the specialists behind your care"
          description="Verified, experienced, and here when you need them."
        />
      </div>

      <Carousel
        opts={{ align: "center", loop: true }}
        setApi={setApi}
        className="w-full mx-auto"
      >
        <CarouselContent className="py-14 pt-0">
          {DOCTORS.map((doctor, index) => {
            const isActive = index === selectedIndex;

            return (
              <CarouselItem
                key={doctor.name}
                className="basis-[70%] sm:basis-[45%] lg:basis-[28%] min-h-full"
              >
                <div
                  className={cn(
                    "relative aspect-square w-full rounded-xl bg-white p-4 shadow-card transition duration-300",
                    isActive && "p-0 h-[calc(100%+40px)]",
                  )}
                >
                  <Link href={`/doctors/${doctor.id}`} className="block h-full">
                    <div
                      className={cn(
                        "aspect-square h-62 w-full overflow-hidden rounded-xl bg-secondary p-4 pb-0 transition duration-300",
                        isActive && "bg-gradient-card h-full w-full",
                      )}
                    >
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        height={200}
                        width={200}
                        className={cn(
                          "h-full w-full object-contain transition duration-300",
                          isActive && "object-contain",
                        )}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  </Link>
                  {/* Name, designation, socials — becomes an overlay when active */}
                  <div
                    className={cn(
                      "inset-x-0 bottom-0 mx-auto flex flex-col gap-1 bg-white p-md transition duration-300",
                      isActive &&
                        "absolute bottom-[15px] w-[calc(100%-30px)] rounded-xl",
                    )}
                  >
                    <h5 className="text-h5 font-semibold text-primary">
                      {doctor.name}
                    </h5>
                    <p className="text-lg text-content-secondary">
                      {doctor.designation}
                    </p>

                    <div className="flex items-center gap-xs pt-xs">
                      {doctor.linkedin && (
                        <a
                          href={doctor.linkedin}
                          aria-label={`${doctor.name} on LinkedIn`}
                          className="flex size-12 items-center justify-center rounded-full border bg-white/15 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                        >
                          <LinkedInIcon className="size-4" />
                        </a>
                      )}
                      {doctor.twitter && (
                        <a
                          href={doctor.twitter}
                          aria-label={`${doctor.name} on Twitter`}
                          className="flex size-12 items-center justify-center rounded-full border bg-white/15 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                        >
                          <TwitterIcon className="size-4" />
                        </a>
                      )}
                      {doctor.email && (
                        <a
                          href={doctor.email}
                          aria-label={`Email ${doctor.name}`}
                          className="flex size-12 items-center justify-center rounded-full border bg-white/15 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                        >
                          <Mail className="size-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}
