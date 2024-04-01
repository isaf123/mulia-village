import Footer from "@/view/Footer";
import ManagedBy from "@/view/ManagedBy";
import Image from "next/image";
import Faq from "@/view/FAQ";
import Fasilitas from "@/view/Fasilitas";

export default function Home() {
  return (
    <section>
      {/* <p>asasa</p> */}
      <Fasilitas />
      <Faq />
      <ManagedBy />
      <Footer />
    </section>
  );
}
