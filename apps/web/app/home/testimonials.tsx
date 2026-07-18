import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@repo/ui";

export default function Testimomials() {
  return (
    <section className="docters w-full">
      <div className="container">
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((n) => (
              <CarouselItem key={n} className="basis-[30%]">
                <div className="bg-gradient-primary rounded-xl p-8 h-48 flex items-center justify-center">
                  Slide {n}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
