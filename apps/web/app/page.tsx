import Header from "@/components/header";
// import { ThemeToggle } from "@/components/providers/ThemeToggle";

// import CardSection from "../components/home/card-section";
import Banner from "../components/home/banner";
import SectionAbout from "../components/home/section-about";
import Statistics from "../components/home/statistics";
import Offer from "../components/home/offer";
import Testimomials from "../components/home/testimonials";
import MedicalDepartments from "../components/home/departments";
import Frontline from "../components/home/frontline";
import AppointmentSection from "../components/sections/appointment-section";
import Footer from "@/components/footer/footer";
import { DoctorsCarousel } from "../components/home/doctors";
import WhyChooseUsSection from "@/components/home/why-choose-us";
import MedicalTechnologySection from "@/components/home/medical-technology";
export default function Page() {
  // console.log("test");
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      {/* <ThemeToggle /> */}
      <Banner />

      <SectionAbout />
      <Statistics />
      <MedicalTechnologySection />
      <Offer />
      <DoctorsCarousel />
      <MedicalDepartments />
      <Testimomials />
      <WhyChooseUsSection />
      <Frontline />

      <AppointmentSection />

      <Footer />

      {/* <h1 className="text-display text-primary -0.5rem font-bold line-height-0 uppercase tracking-tight mt-[150px]">
        Welcome to the Home Page
      </h1> */}
    </main>
  );
}
