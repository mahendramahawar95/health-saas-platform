import { Card } from "@repo/ui";
import Image from "next/image";

export default function CardSection() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 ">
      <Card className=" hover:bg-gradient-secondary hover:text-white hover:border-transparent">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src="/mind.png"
              alt="Hero"
              width={600}
              height={600}
              className="aspect-2/2"
            />
          </div>
          <div>
            <h4 className="text-h4 font-semibold mb-2">Brain health check</h4>
            <p className="text-sm text-muted-foreground">
              Assess your cognitive function and mental well-being with our
              comprehensive brain health check.
            </p>
          </div>
        </div>
      </Card>
      <Card className=" hover:bg-gradient-secondary hover:text-white hover:border-transparent">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src="/liver.png"
              alt="Hero"
              width={600}
              height={600}
              className="aspect-2/2"
            />
          </div>
          <div>
            <h4 className="text-h4 font-semibold mb-2">Liver function test</h4>
            <p className="text-sm text-muted-foreground">
              Evaluate your liver health and detect potential issues early with
              our liver function test.
            </p>
          </div>
        </div>
      </Card>
      <Card className=" hover:bg-gradient-secondary hover:text-white hover:border-transparent">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src="/kidney.png"
              alt="Hero"
              width={600}
              height={600}
              className="aspect-2/2"
            />
          </div>
          <div>
            <h4 className="text-h4 font-semibold mb-2">Kidney function test</h4>
            <p className="text-sm text-muted-foreground">
              Monitor your kidney health and identify any abnormalities with our
              kidney function test.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
