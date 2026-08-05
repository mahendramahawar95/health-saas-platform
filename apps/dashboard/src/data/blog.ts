export type Post = {
  slug: string;
  category: string;
  title: string;
  readingTime: string;
  author: string;
  image: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "5-habits-for-a-healthier-heart",
    category: "Nutrition",
    title: "5 Habits for a Healthier Heart",
    readingTime: "4 min read",
    author: "Dr. Anika Sharma",
    image: "https://picsum.photos/seed/heart-health/600/400",
    content: [
      "Heart disease rarely shows up overnight. It's usually the result of small habits repeated for years — which is good news, because it means small changes, repeated consistently, can move things back in the right direction.",
      "Start with movement. You don't need an intense workout routine; a brisk 30-minute walk five days a week measurably lowers blood pressure and improves cholesterol over a few months.",
      "Watch sodium more than fat. Most people overestimate how much fat affects their heart and underestimate sodium's role in blood pressure — packaged and restaurant food is the biggest source, not the salt shaker at home.",
      "Sleep and stress matter as much as diet. Poor sleep and chronic stress both raise cortisol and blood pressure over time, so treating rest as part of your heart routine, not separate from it, makes a real difference.",
      "Finally, get your numbers checked regularly. Blood pressure, cholesterol, and blood sugar can all drift quietly for years before symptoms appear — a yearly checkup catches that drift early, when it's easiest to reverse.",
    ],
  },
  {
    slug: "understanding-seasonal-allergies",
    category: "Wellness",
    title: "Understanding Seasonal Allergies",
    readingTime: "6 min read",
    author: "Dr. Rohan Mehta",
    image: "https://picsum.photos/seed/allergies/600/400",
    content: [
      "Seasonal allergies happen when your immune system misidentifies harmless particles — pollen, mold spores, dust — as threats, and mounts a full response against them. That response is what causes the sneezing, itchy eyes, and congestion.",
      "Timing depends on what you're reacting to. Tree pollen tends to peak earlier in the season, grass pollen through the middle, and weed pollen later — so if your symptoms shift month to month, that's often the trigger changing, not the allergy getting worse.",
      "Over-the-counter antihistamines work well for most people, but timing matters: taking them before symptoms start, rather than after, blunts the reaction far more effectively.",
      "If symptoms are severe or your usual medication has stopped working, allergy testing can identify the specific trigger and open up options like immunotherapy, which trains the immune system to react less over time rather than just suppressing symptoms.",
      "See a doctor if allergy symptoms come with wheezing, shortness of breath, or a fever — those aren't typical of seasonal allergies and are worth ruling out separately.",
    ],
  },
  {
    slug: "a-parents-guide-to-vaccination-schedules",
    category: "Parenting",
    title: "A Parent's Guide to Vaccination Schedules",
    readingTime: "5 min read",
    author: "Dr. Priya Nair",
    image: "https://picsum.photos/seed/vaccination/600/400",
    content: [
      "Vaccination schedules can look overwhelming on paper, but they're built around one simple idea: protecting children at the exact ages when they're most vulnerable to a given disease and most able to respond to the vaccine.",
      "The first year covers the most ground — vaccines for hepatitis B, rotavirus, diphtheria, tetanus, pertussis, and more are spaced out across well-child visits so the immune system isn't overloaded at any single appointment.",
      "Boosters aren't repeats for no reason — immunity from some vaccines fades over time, and booster doses are timed to top it back up before protection meaningfully drops.",
      "If you're behind schedule for any reason — a missed appointment, an illness, moving between clinics — it's rarely too late to catch up. A pediatrician can build a catch-up schedule rather than starting over.",
      "Keep a written or digital record of every dose. Schools, camps, and future travel often require proof, and it's far easier to keep the record current than to reconstruct it years later.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
