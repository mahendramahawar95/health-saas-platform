import { Section, SectionHeading } from "@repo/ui";
import Image from "next/image";

export default function Frontline() {
  return (
    <Section id="frontline" className="bg-section-first py-3xl pt-0">
      <div className="container">
        <SectionHeading
          badgeClass="bg-badge-tag p-2 text-primary font-bold"
          badgeText="BLOG"
          heading="LAtest from medical frontline"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-xl lg:mb-0 mb-8 border border-border bg-card overflow-hidden shadow-sm ">
            {/* Top Image */}
            <div className="relative w-full aspect-video">
              <Image
                src="/front-1.png"
                alt="Hero"
                width={100}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              {/* Badges left, Date right */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-medium px-2.5 py-1">
                    Healthcare
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-500/15 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-1">
                    Emergency
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  June 12, 2026
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Frontline medical staff continue to provide critical emergency
                care, working around the clock to support patients during the
                crisis response.
              </p>

              {/* User row: circular image + name */}
              <div className="flex items-center gap-3">
                <Image
                  src="/avatar.avif"
                  alt="Hero"
                  width={16}
                  height={16}
                  className="rounded-full object-cover"
                />

                <span className="text-sm font-medium">Dr. Sarah Johnson</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl lg:mb-0 mb-8 border border-border bg-card overflow-hidden shadow-sm ">
            {/* Top Image */}
            <div className="relative w-full aspect-video">
              <Image
                src="/front-3.png"
                alt="Hero"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              {/* Badges left, Date right */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-medium px-2.5 py-1">
                    Healthcare
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-500/15 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-1">
                    Emergency
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  June 12, 2026
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Frontline medical staff continue to provide critical emergency
                care, working around the clock to support patients during the
                crisis response.
              </p>

              {/* User row: circular image + name */}
              <div className="flex items-center gap-3">
                <Image
                  src="/avatar.avif"
                  alt="Hero"
                  width={16}
                  height={16}
                  className=" rounded-full object-cover"
                />

                <span className="text-sm font-medium">Dr. Sarah Johnson</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl lg:mb-0 mb-8 border border-border bg-card overflow-hidden shadow-sm ">
            {/* Top Image */}
            <div className="relative w-full aspect-video">
              <Image
                src="/front-2.png"
                alt="Hero"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              {/* Badges left, Date right */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-medium px-2.5 py-1">
                    Healthcare
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-500/15 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-1">
                    Emergency
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  June 12, 2026
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Frontline medical staff continue to provide critical emergency
                care, working around the clock to support patients during the
                crisis response.
              </p>

              {/* User row: circular image + name */}
              <div className="flex items-center gap-3">
                <Image
                  src="/avatar.avif"
                  alt="Hero"
                  width={9}
                  height={9}
                  className="rounded-full object-cover"
                />

                <span className="text-sm font-medium">Dr. Sarah Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
