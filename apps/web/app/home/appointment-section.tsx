import AppointmentForm from "@/components/appointment-form/appointment";

export default function AppointmentSection() {
  return (
    <section className="appointment-form">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              🚀 About Us
            </span>
            <h2 className="text-3xl font-bold mb-4">APex medical hospital</h2>
            <p>
              We are a team of passionate individuals dedicated to providing the
              best services to our clients. Our mission is to deliver
              high-quality solutions that meet the unique needs of each
              customer.
            </p>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
