import ServicesList from "../../components/sections/services-list/services-list";

export const metadata = {
  title: "Services",
  description:
    "Explore the full range of medical services we offer, from diagnostics to home care.",
};

export default function ServicesPage() {
  return <ServicesList />;
}
