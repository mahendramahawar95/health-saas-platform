import Image from "next/image";
import { Hero, Button } from "@repo/ui";
export default function Banner() {
  return (
    <Hero
      className="bg-gradient-primary pt-12"
      badge={
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          🚀 New Release
        </span>
      }
      title={
        <>
          Build Better
          <br />
          Applications
        </>
      }
      description="Create modern web applications with our reusable UI components."
      actions={
        <>
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </>
      }
      image={<Image src="/Subject.png" alt="Hero" width={600} height={600} />}
    />
  );
}
