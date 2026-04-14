import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Transformation from "@/components/Transformation";
import Pricing from "@/components/Pricing";

import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustSignals />
        <Services />
        <Team />
        <Transformation />
        <Pricing />

        <Testimonials />
        <AppointmentForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
