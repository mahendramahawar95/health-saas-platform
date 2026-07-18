import { Button } from "@repo/ui";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function SectionAbout() {
  return (
    <section className="section-about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="">
            <Image
              src="/hospital.webp"
              alt="About Us"
              width={500}
              height={300}
              className="img-fluid w-full h-auto"
            />
          </div>
          <div className="">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              🚀 About Us
            </span>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p>
              We are a team of passionate individuals dedicated to providing the
              best services to our clients. Our mission is to deliver
              high-quality solutions that meet the unique needs of each
              customer.
            </p>
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    <PhoneCall />
                  </span>
                  <div className="">
                    <p>Call us for any queries</p>
                    <p>+91 9988775533</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
