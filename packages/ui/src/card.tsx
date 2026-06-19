"use client";

export function Card() {
  return (
    <article
      className="
        relative

        z-card

        max-w-[520px]

        rounded-card

        bg-card
        text-foreground

        border
        border-border

        shadow-card

        p-card

        transition-all
        duration-300
        ease-smooth

        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-4">
        <div
          className="
            size-12
            rounded-full
            bg-primary/10
            flex
            items-center
            justify-center
          "
        >
          <span className="text-primary text-lg">❤️</span>
        </div>

        <div>
          <h3 className="text-h3 font-semibold">Patient Overview</h3>

          <p className="text-body opacity-70">Health summary dashboard</p>
        </div>
      </div>

      {/* BODY */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-body">
          <span>Heart Rate</span>
          <span className="text-success font-medium">Normal</span>
        </div>

        <div className="flex justify-between text-body">
          <span>Blood Pressure</span>
          <span>120/80</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-6 flex items-center justify-between">
        <button
          className="
            bg-primary
            text-white

            px-5
            py-2.5

            rounded-lg

            transition
            hover:opacity-90
          "
        >
          View Report
        </button>

        <span
          className="
            text-xs
            opacity-60
          "
        >
          Updated 2h ago
        </span>
      </div>
    </article>
  );
}
