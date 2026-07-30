import Header from "@/components/header";
// import { ThemeToggle } from "@/components/providers/ThemeToggle";

import CardSection from "./home/card-section";
import Banner from "./home/banner";
import SectionAbout from "./home/section-about";
import Statistics from "./home/statistics";
import Offer from "./home/offer";
import Testimomials from "./home/testimonials";
import MedicalDepartments from "./home/departments";
import Frontline from "./home/frontline";
import AppointmentSection from "./home/appointment-section";
import Footer from "@/components/footer/footer";
import { DoctorsCarousel } from "./home/doctors";
export default function Page() {
  // console.log("test");
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      {/* <ThemeToggle /> */}
      <Banner />
      <CardSection />
      <SectionAbout />
      <Statistics />
      <Offer />
      <DoctorsCarousel />
      <MedicalDepartments />
      <Testimomials />
      <Frontline />
      <div className="bg-gradient-section py-3xl w-full">
        <AppointmentSection />
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <h1 className="text-display text-primary -0.5rem font-bold line-height-0 uppercase tracking-tight mt-[150px]">
        Welcome to the Home Page
      </h1> */}
    </main>
  );
}
