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
import PureSyariah from "@/view/pure_syariah";
import Contact from "@/view/Contact";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { getBlogPosts } from "@/utils/contentful";

export default function Home() {
  const [active1, setActive1] = useState<Boolean>();
  const [getData, setGetData] = useState<any[]>([]);

  useEffect(() => {
    setActive1(true);
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      const response = await getBlogPosts();
      setGetData(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("daoet data", getData);
  console.log(getData[0]?.updatepromo.fields.file.url);
  return (
    <div>
      {active1 ? (
        <div className="fixed  w-full h-full z-[999]">
          <div
            className="absolute bg-black w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm z-[36]"
            onClick={() => {
              setActive1(!active1);
            }}
          ></div>

          <img
            src={getData[0]?.updatepromo.fields.file.url}
            alt=""
            width={700}
            height={700}
            className="absolute z-[39] left-[35.3%] top-[10%] hidden md:block"
            onClick={() => {
              setActive1(!active1);
            }}
          />

          <img
            src={getData[0]?.updatepromo.fields.file.url}
            alt=""
            width={400}
            height={400}
            className="absolute z-[39] left-[3%] top-[10%] block md:hidden"
            onClick={() => {
              setActive1(!active1);
            }}
          />
        </div>
      ) : (
        <></>
      )}

      <div className="bg-[#E9E9E9]">
        <section id="home">
          <HeroSection />
        </section>
        <section id="aboutus">
          <AboutUs />
        </section>
        <LokasiStrategis />
        <Fasilitas />
        <section id="product">
          <TypeRumah />
        </section>
        <LegalitasTerjamin />
        <TestimonialsCustomer />
        <PureSyariah />
        <Faq />
        <ManagedBy />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
