
import Footer from "@/view/Footer";
import ManagedBy from "@/view/ManagedBy";
import Image from "next/image";
import Faq from "@/view/FAQ";
import Fasilitas from "@/view/Fasilitas";
import LokasiStrategis from "@/view/lokasi_strategis";
import Image from "next/image";
import Divider1 from "@/components/Divider1";
import Divider2 from "@/components/DIvider2";
import HeroSection from "@/view/HeroSection";
import AboutUs from "@/view/AboutUs";
import LegalitasTerjamin from "@/view/legalitas_terjamin";
import TypeRumah from "@/view/typerumah";
import TestimonialsCustomer from "@/view/testimonials_customer";





export default function Home() {
  return (
    <div className="bg-[#E9E9E9]">
      <HeroSection />
      <AboutUs />
      <LokasiStrategis />
      <Fasilitas />
      <TypeRumah />
      <Divider1>Legalitas Terjamin</Divider1>
      <LegalitasTerjamin />
      <Divider1>Testimonials from</Divider1>
      <TestimonialsCustomer />
      
      <Faq />
      <ManagedBy />
      <Footer />

    </div>

  );
}
