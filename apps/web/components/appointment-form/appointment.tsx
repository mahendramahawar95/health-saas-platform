"use client";

import { useState } from "react";
import { Button, Input } from "@repo/ui";
import { User, Mail, Phone, Calendar, Clock, Stethoscope } from "lucide-react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(true);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // await submitForm(data);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-white shadow-sm p-6  w-full">
      <h2 className="text-lg font-semibold mb-1">Book an Appointment</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Fill in your details and we will confirm your slot shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          leftIcon={<User size={16} />}
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange("name")}
          required
        />

        <Input
          label="Email"
          type="email"
          leftIcon={<Mail size={16} />}
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange("email")}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          leftIcon={<Phone size={16} />}
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange("phone")}
          required
        />

        <Input
          label="Department"
          leftIcon={<Stethoscope size={16} />}
          placeholder="e.g. Cardiology"
          value={form.department}
          onChange={handleChange("department")}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Date"
            type="date"
            leftIcon={<Calendar size={16} />}
            value={form.date}
            onChange={handleChange("date")}
            required
          />

          <Input
            label="Time"
            type="time"
            leftIcon={<Clock size={16} />}
            value={form.time}
            onChange={handleChange("time")}
            required
          />
        </div>

        <Button
          type="submit"
          variant={"primary"}
          className="text-white"
          isLoading={isSubmitting}
          loadingText="Booking..."
        >
          Book an Appointment
        </Button>
      </form>
    </div>
  );
}
