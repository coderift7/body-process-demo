import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Audience from "@/components/Audience";
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
        <Services />
        <Audience />
        <Transformation />
        <Team />
        <Pricing />
        <Testimonials />
        <TrustSignals />
        <AppointmentForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
