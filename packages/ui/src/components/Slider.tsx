"use client";

import useEmblaCarousel from "embla-carousel-react";

export function Slider() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  const slides = [
    { id: 1, color: "bg-red-500", title: "Slide 1" },
    { id: 2, color: "bg-blue-500", title: "Slide 2" },
    { id: 3, color: "bg-green-500", title: "Slide 3" },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Embla viewport */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        {/* Embla container */}
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="grow-0 shrink-0 basis-full min-w-0 h-[400px] flex items-center justify-center text-5xl font-bold text-white"
            >
              <div
                className={`w-full h-full ${slide.color} flex items-center justify-center`}
              >
                {slide.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
