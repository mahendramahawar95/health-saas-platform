import { Calendar, Phone, Clock, AlertCircle, Info } from "lucide-react";
import { Breadcrumb } from "../breadcrumb/breadcrumb";
import { DoctorHeader } from "../doctor-header/doctor-header";
import { DetailCard } from "../detail-card/detail-card";
import { SidebarCard } from "../sidebar-card/sidebar-card";
import { Button } from "../components/button/Button";

interface DoctorDetailPageProps {
  doctor: {
    name: string;
    designation: string;
    image: string;
    rating: number;
    reviewCount: number;
    tags: string[];
    about: string;
    experience: string;
    education: string[];
    certifications: string[];
    expertise: string[];
    services: string[];
    phone: string;
    email: string;
    workingHours: { day: string; hours: string }[];
    emergencyContact: string;
    quickFacts: { label: string; value: string }[];
  };
}

export function DoctorDetailPage({ doctor }: DoctorDetailPageProps) {
  return (
    <div className="pb-3xl">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Doctors", href: "/doctors" },
          { label: doctor.name },
        ]}
      />

      <div className="container grid grid-cols-1 gap-lg lg:grid-cols-[7fr_3fr]">
        {/* Left column — 70% */}
        <div className="flex flex-col gap-lg">
          <DoctorHeader
            name={doctor.name}
            designation={doctor.designation}
            image={doctor.image}
            rating={doctor.rating}
            reviewCount={doctor.reviewCount}
            tags={doctor.tags}
          />

          <DetailCard title="About">
            <p>{doctor.about}</p>
          </DetailCard>

          <DetailCard title="Experience">
            <p>{doctor.experience}</p>
          </DetailCard>

          <DetailCard title="Education">
            <ul className="flex flex-col gap-xs">
              {doctor.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard title="Certifications">
            <ul className="flex flex-col gap-xs">
              {doctor.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard title="Areas of Expertise">
            <div className="flex flex-wrap gap-xs">
              {doctor.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-secondary px-sm py-xs text-small text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </DetailCard>

          <DetailCard title="Services">
            <ul className="grid grid-cols-1 gap-xs sm:grid-cols-2">
              {doctor.services.map((item) => (
                <li key={item} className="flex items-center gap-xs">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </DetailCard>
        </div>

        {/* Right column — 30% */}
        <div className="flex flex-col gap-lg">
          <SidebarCard title="Book an Appointment" icon={Calendar}>
            <p className="mb-md text-body text-content-secondary">
              Next available slot: Today, 4:00 PM
            </p>
            <Button variant="primary" size="md" className="w-full">
              Book Now
            </Button>
          </SidebarCard>

          <SidebarCard title="Contact" icon={Phone}>
            <div className="flex flex-col gap-xs text-body text-content-secondary">
              <span>{doctor.phone}</span>
              <span>{doctor.email}</span>
            </div>
          </SidebarCard>

          <SidebarCard title="Working Hours" icon={Clock}>
            <ul className="flex flex-col gap-xs text-small text-content-secondary">
              {doctor.workingHours.map((slot) => (
                <li key={slot.day} className="flex justify-between">
                  <span className="text-foreground">{slot.day}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </SidebarCard>

          <SidebarCard title="Emergency Contact" icon={AlertCircle}>
            <p className="text-body font-medium text-danger">
              {doctor.emergencyContact}
            </p>
          </SidebarCard>

          <SidebarCard title="Quick Facts" icon={Info}>
            <ul className="flex flex-col gap-xs text-small text-content-secondary">
              {doctor.quickFacts.map((fact) => (
                <li key={fact.label} className="flex justify-between">
                  <span>{fact.label}</span>
                  <span className="font-medium text-foreground">
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </SidebarCard>
        </div>
      </div>
    </div>
  );
}
