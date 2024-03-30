import LokasiStrategis from "@/view/lokasi_strategis";
import Image from "next/image";
import Divider1 from "@/components/Divider1";
import Divider2 from "@/components/DIvider2";
import HeroSection from "@/view/HeroSection";
import AboutUs from "@/view/AboutUs";
import LegalitasTerjamin from "@/view/legalitas_terjamin";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <LokasiStrategis />
      <Divider1>Legalitas Terjamin</Divider1>
      <LegalitasTerjamin />
    </div>
  );
}
