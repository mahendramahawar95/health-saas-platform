export type NavSubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavSubItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about/company" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission", href: "/about/mission" },
      { label: "Awards", href: "/about/awards" },
    ],
  },
  {
    label: "Doctors",
    href: "/doctors",
    children: [
      { label: "Doctor List", href: "/doctors/list" },
      { label: "Doctor Details", href: "/doctors/details" },
      { label: "Departments", href: "/doctors/departments" },
      { label: "Book Appointment", href: "/appointments/book" },
    ],
  },
  {
    label: "Appointments",
    href: "/appointments",
    children: [
      { label: "Book Appointment", href: "/appointments/book" },
      { label: "Appointment Success", href: "/appointments/success" },
      { label: "Find Doctor", href: "/appointments/find-doctor" },
      { label: "Find Hospital", href: "/appointments/find-hospital" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Cardiology", href: "/departments/cardiology" },
      { label: "Neurology", href: "/departments/neurology" },
      { label: "Orthopedics", href: "/departments/orthopedics" },
      { label: "Pediatrics", href: "/departments/pediatrics" },
      { label: "Dermatology", href: "/departments/dermatology" },
      { label: "ENT", href: "/departments/ent" },
      { label: "Oncology", href: "/departments/oncology" },
      { label: "Gastroenterology", href: "/departments/gastroenterology" },
      { label: "Dentistry", href: "/departments/dentistry" },
      { label: "Physiotherapy", href: "/departments/physiotherapy" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Diagnostics", href: "/services/diagnostics" },
      { label: "Laboratory", href: "/services/laboratory" },
      { label: "Emergency", href: "/services/emergency" },
      { label: "Surgery", href: "/services/surgery" },
      { label: "Ambulance", href: "/services/ambulance" },
      { label: "Home Care", href: "/services/home-care" },
    ],
  },
  {
    label: "Patients",
    href: "/patients",
    children: [
      { label: "Patient Portal", href: "/patients/portal" },
      { label: "Medical Records", href: "/patients/medical-records" },
      { label: "Insurance", href: "/patients/insurance" },
      { label: "FAQ", href: "/patients/faq" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Health Tips", href: "/resources/health-tips" },
      { label: "Articles", href: "/resources/articles" },
      { label: "Events", href: "/resources/events" },
    ],
  },
];
