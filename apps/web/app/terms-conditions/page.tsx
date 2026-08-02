const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Use of Our Services",
    body: "Our website and online services are provided for informational purposes and to facilitate appointment booking. You agree to provide accurate information and to use our services only for their intended purpose.",
  },
  {
    title: "3. Appointments & Cancellations",
    body: "Appointments booked online or by phone are subject to confirmation. Please cancel or reschedule at least 24 hours in advance; late cancellations or missed appointments may be subject to a fee.",
  },
  {
    title: "4. Medical Disclaimer",
    body: "Content on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified physician for diagnosis and treatment specific to your condition.",
  },
  {
    title: "5. Limitation of Liability",
    body: "To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on this website, including text, graphics, and logos, is our property or used with permission and may not be reproduced without prior written consent.",
  },
  {
    title: "7. Governing Law",
    body: "These Terms are governed by the laws of the jurisdiction in which we operate, without regard to conflict-of-law principles.",
  },
  {
    title: "8. Changes to Terms",
    body: "We may revise these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.",
  },
  {
    title: "9. Contact Us",
    body: "Questions about these Terms & Conditions can be directed to care@medicare-hospital.com or +91 12345 67890.",
  },
];

export default function TermsConditionsPage() {
  return (
    <section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Legal
          </span>
          <h1 className="mt-2 text-h2 font-semibold text-foreground">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-small text-content-secondary">
            Last updated: August 1, 2026
          </p>

          <p className="mt-6 text-body text-content-secondary">
            These Terms & Conditions govern your use of our website and
            services. This is a general template — have it reviewed by legal
            counsel before publishing, particularly the medical disclaimer and
            liability sections.
          </p>

          <div className="mt-xl flex flex-col gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-h5 font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-2 text-body text-content-secondary">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
