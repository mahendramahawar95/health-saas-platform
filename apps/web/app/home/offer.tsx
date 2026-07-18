import Image from "next/image";

export default function Offer() {
  return (
    <section className="Offer w-full">
      <div className="container">
        <div className="grid grid-cols-[65%_35%]  gap-6 ">
          {/* Left */}
          <div className="row-span-2  rounded-lg  bg-[url('/imagedna.png')] bg-cover bg-center bg-no-repeat">
            here is content
          </div>

          {/* Right Top */}
          <div className="rounded-lg h-72 bg-green-200 p-6 bg-[url('/docter1.jpg')] bg-cover bg-top bg-no-repeat">
            Right Top
          </div>

          {/* Right Bottom */}
          <div className="rounded-lg h-72 bg-gradient-primary px-16">
            <Image
              src="/dna.png"
              alt="DNA"
              width={180}
              height={80}
              className=" w-auto h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
