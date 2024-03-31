import LokasiStrategis from "@/view/lokasi_strategis";
import Image from "next/image";
import Divider1 from "@/components/Divider1";
import Divider2 from "@/components/DIvider2";
import HeroSection from "@/view/HeroSection";
import AboutUs from "@/view/AboutUs";
import LegalitasTerjamin from "@/view/legalitas_terjamin";
import TestimonialsCustomer from "@/view/testimonials_customer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <LokasiStrategis />
      <Divider1>Legalitas Terjamin</Divider1>
      <LegalitasTerjamin />
      <Divider1>Testimonials from</Divider1>
      <TestimonialsCustomer />
    </div>
  );
}
