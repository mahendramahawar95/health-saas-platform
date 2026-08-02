const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, such as your name, contact details, and health information submitted through appointment forms, along with technical data like IP address and browser type collected automatically when you visit our site.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used to schedule and manage appointments, communicate with you about your care, improve our services, and comply with legal and regulatory requirements applicable to healthcare providers.",
  },
  {
    title: "3. Sharing of Information",
    body: "We do not sell your personal or health information. We may share it with treating physicians, insurance providers for billing purposes, and service providers who support our operations, all bound by confidentiality obligations.",
  },
  {
    title: "4. Data Security",
    body: "We use administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, or misuse, and we review these measures on an ongoing basis.",
  },
  {
    title: "5. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information, subject to applicable law and our obligations to retain certain medical records. Contact us using the details below to make a request.",
  },
  {
    title: "6. Cookies",
    body: "Our website uses cookies to remember preferences and understand how visitors use our site. You can control cookie settings through your browser at any time.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date.",
  },
  {
    title: "8. Contact Us",
    body: "If you have questions about this Privacy Policy or how your information is handled, contact us at care@medicare-hospital.com or +91 12345 67890.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Legal
          </span>
          <h1 className="mt-2 text-h2 font-semibold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-small text-content-secondary">
            Last updated: August 1, 2026
          </p>

          <p className="mt-6 text-body text-content-secondary">
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our website and services. It is a general
            template — have it reviewed by legal counsel before publishing,
            since healthcare data is subject to specific regulatory requirements
            in your jurisdiction.
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
