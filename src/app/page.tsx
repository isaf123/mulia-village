import Image from "next/image";
import Divider1 from "@/components/Divider1";
import Divider2 from "@/components/DIvider2";
import HeroSection from "@/view/HeroSection";
import AboutUs from "@/view/AboutUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
    </div>
  );
}
