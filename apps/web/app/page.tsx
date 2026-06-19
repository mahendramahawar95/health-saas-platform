import { ThemeToggle } from "@/components/providers/ThemeToggle";

export default function Page() {
  // console.log("test");
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <ThemeToggle />

      <div
        className="
        w-full
        color-background
        rounded-xl
        border
        border-border
        bg-card
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
      "
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            bg-primary/10
          "
          >
            ❤️
          </div>

          <div>
            <h3
              className="
              text-h3
              font-semibold
              text-foreground
            "
            >
              Patient Overview
            </h3>

            <p
              className="
              text-small
              text-foreground/70
            "
            >
              Latest health summary
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
          my-6
          border-t
          border-border
        "
        />

        {/* Stats */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span
              className="
              text-body
              text-foreground/70
            "
            >
              Heart Rate
            </span>

            <span
              className="
              font-medium
              text-success
            "
            >
              72 BPM
            </span>
          </div>

          <div className="flex justify-between">
            <span
              className="
              text-body
              text-foreground/70
            "
            >
              Blood Pressure
            </span>

            <span className="text-body text-foreground">120 / 80</span>
          </div>

          <div className="flex justify-between">
            <span
              className="
              text-body
              text-foreground/70
            "
            >
              Oxygen Level
            </span>

            <span className="text-body text-foreground">98%</span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
          mt-6

          flex
          items-center
          justify-between
        "
        >
          <button
            className="
            rounded-lg

            bg-primary

            px-5
            py-2.5

            text-white

            transition-all
            duration-300

            hover:opacity-90
          "
          >
            View Report
          </button>

          <span
            className="
            text-xs
            text-foreground/60
          "
          >
            Updated 2h ago
          </span>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <section className="py-12 lg:py-20">
          <h1 className="text-display font-bold">
            Healthcare Management Platform
          </h1>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* cards */}
          </div>
        </section>
      </div>
    </main>
  );
}
