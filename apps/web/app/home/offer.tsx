import { Section } from "@repo/ui";
import Image from "next/image";

export default function Offer() {
  return (
    <Section id="offer" className="bg-section-first py-3xl">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%]  gap-6 ">
          {/* Left */}
          <div className="row-span-2 rounded-lg overflow-hidden">
            <Image
              src="/front-1.png"
              alt="imagedna"
              width={500}
              height={700}
              className="w-full h-full "
            />
          </div>

          {/* Right Top */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/thetscop.png"
              alt="thetscop"
              width={200}
              height={100}
              className="w-full h-full"
            />
          </div>

          {/* Right Bottom */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/front-3.png"
              alt="DNA"
              width={200}
              height={100}
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
