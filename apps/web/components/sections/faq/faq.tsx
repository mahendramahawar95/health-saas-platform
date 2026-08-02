"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      'You can book online through our Appointments page, call our front desk directly, or use the "Book Appointment" button on any department or service page. Online bookings get a confirmation instantly.',
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance providers and cashless treatment through several network partners. Bring your insurance card at check-in and our billing desk will verify coverage before your visit.",
  },
  {
    question: "Is emergency care available 24/7?",
    answer:
      "Yes. Our emergency department and ambulance service operate 24 hours a day, every day, with on-call specialists available at any hour.",
  },
  {
    question: "Can I get an online consultation?",
    answer:
      "Yes, video consultations are available for many departments. Book an online consultation the same way you'd book an in-person visit, and you'll receive a video link before your appointment time.",
  },
  {
    question: "How do I access my medical records?",
    answer:
      "Your records are available through the Patient Portal. If you're a first-time user, our patient services desk can help you set up access during or after your visit.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "Please bring a valid photo ID, your insurance card if applicable, a list of current medications, and any prior test results or referral letters related to your visit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            FAQ
          </span>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-body text-content-secondary">
            Can&apos;t find what you&apos;re looking for? Reach out and our team
            will help directly.
          </p>
        </div>

        <div className="mx-auto mt-xl flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                data-open={isOpen}
                className="accordion-item rounded-lg border border-border bg-card shadow-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-lg py-4 text-left"
                >
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-content-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div className="accordion-content">
                  <div>
                    <p className="px-lg pb-4 text-small text-content-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
