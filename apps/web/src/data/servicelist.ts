export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  availability: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "diagnostics",
    name: "Diagnostics",
    tagline: "Fast, accurate imaging and screening",
    description:
      "On-site diagnostic imaging and screening so results reach your doctor the same day, cutting down the wait between a symptom and a treatment plan.",
    availability: "Mon–Sat, 7 AM – 9 PM",
    features: [
      "MRI & CT scans",
      "X-ray & ultrasound",
      "ECG & cardiac screening",
      "Same-day report delivery",
    ],
  },
  {
    slug: "laboratory",
    name: "Laboratory",
    tagline: "In-house pathology and blood work",
    description:
      "A fully equipped lab handling routine and specialized tests, with home sample collection for anyone who can't make it in.",
    availability: "Daily, 6 AM – 10 PM",
    features: [
      "Blood & urine analysis",
      "Hormone & thyroid panels",
      "Home sample collection",
      "Digital reports within 24 hours",
    ],
  },
  {
    slug: "emergency",
    name: "Emergency",
    tagline: "Round-the-clock critical care",
    description:
      "A dedicated emergency department staffed and equipped for critical care at any hour, with a direct line to specialists across every department.",
    availability: "24×7",
    features: [
      "Trauma & critical care unit",
      "On-call specialists",
      "Rapid triage system",
      "Direct ICU admission",
    ],
  },
  {
    slug: "surgery",
    name: "Surgery",
    tagline: "Modern operation theaters, experienced surgeons",
    description:
      "From minimally invasive procedures to complex operations, our surgical teams work out of modern theaters with full pre- and post-operative care.",
    availability: "By appointment",
    features: [
      "Minimally invasive surgery",
      "Pre-operative assessment",
      "Post-operative monitoring",
      "Multi-specialty surgical teams",
    ],
  },
  {
    slug: "ambulance",
    name: "Ambulance",
    tagline: "Rapid response, fully equipped",
    description:
      "A dispatched ambulance fleet equipped for critical transport, staffed with trained paramedics who stay in contact with the emergency team en route.",
    availability: "24×7",
    features: [
      "GPS-tracked dispatch",
      "Trained paramedic staff",
      "Advanced life support equipment",
      "Direct handoff to emergency team",
    ],
  },
  {
    slug: "home-care",
    name: "Home Care",
    tagline: "Care delivered where you live",
    description:
      "Nursing visits, post-surgical care, and elderly care at home for patients who are recovering or need ongoing support outside the hospital.",
    availability: "Scheduled visits, 7 days a week",
    features: [
      "Post-surgical nursing care",
      "Elderly & palliative care",
      "Medication management",
      "Physiotherapy at home",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
