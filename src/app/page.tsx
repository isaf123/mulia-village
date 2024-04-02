"use client";
import Footer from "@/view/Footer";
import ManagedBy from "@/view/ManagedBy";
import Faq from "@/view/FAQ";
import Fasilitas from "@/view/Fasilitas";
import LokasiStrategis from "@/view/lokasi_strategis";
import Divider1 from "@/components/Divider1";
import HeroSection from "@/view/HeroSection";
import AboutUs from "@/view/AboutUs";
import LegalitasTerjamin from "@/view/legalitas_terjamin";
import TypeRumah from "@/view/typerumah";
import TestimonialsCustomer from "@/view/testimonials_customer";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState<Boolean>();

  useEffect(() => {
    setActive(true);
  }, []);
  return (

    <div>
      {active ? (
        <div className="fixed  w-full h-full z-[9999]">
          <div className="absolute bg-black w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm z-[36]"></div>

          <IoMdCloseCircleOutline
            className="absolute z-[40] text-color2 w-[45px] md:w-[65px] h-[45px] md:h-[65px] cursor-pointer left-[84%] md:left-[63%] top-16 md:top-20"
            onClick={() => {
              setActive(!active);
            }}
          />

          <Image
            src={"/popup.png"}
            alt=""
            width={600}
            height={600}
            className="absolute z-[39] left-[35.3%] top-[10%] hidden md:block"
          />
          <Image
            src={"/popup.png"}
            alt=""
            width={400}
            height={400}
            className="absolute z-[39] left-[3%] top-[10%] block md:hidden"
          />
        </div>
      ) : (
        <></>
      )}
     

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
    </div>
  );
}
