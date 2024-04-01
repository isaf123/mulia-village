import * as React from "react";
import Image from "next/image";
import ReadMoreButton from "@/components/ReadMoreButton";
interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
  return (
    <div className="w-full h-[460px] md:h-[1080px] pl-[20px] md:pl-[90px]  mt-10 relative">
      {/* <div className="flex "> */}
      <div className=" flex h-full">
        <Image
          src="/fotopot1.png"
          alt=""
          width={641}
          height={951}
          className="z-50 hidden md:block"
        />
        <Image
          src="/fotopotmobile.png"
          alt=""
          width={146}
          height={366}
          className="z-50 block md:hidden"
        />
        <div className="pl-5 md:pl-20 w-full">
          <div className=" flex items-center md:mb-[55px] justify-between">
            <h2 className="font-bold text-color1 text-[20px] md:text-[70px]  md:w-[600px] pl-[20px]">
              About <span className="italic  font-playfair">Us</span>
            </h2>
            <div className="w-[85px] md:w-full border-b-[2px] md:border-b-[6px] border-color1"></div>
          </div>
          <h2 className="text-[14px] md:text-[60px] text-color2 font-playfair italic">
            Welcome to
          </h2>
          <h2 className="text-[14px] md:text-[60px] text-color1 font-poppins font-bold mb-[11px] md:mb-[45px]">
            Mulia village Juanda
          </h2>
          <p className="text-[12px] md:text-[24px] text-color1 font-[400px] w-[198px] md:w-[861px] ">
            Mulia Village Juanda Hunian Premium Surabaya – Sidoarjo.
            Mempersembahkan hunian dengan konsep islami baik dalam lingkungan
            maupun transaksi. Berlokasikan sangat strategis karena berdekatan
            dengan Bandara Juanda dan Fasilitas Umum lainnya. Didukung pula
            dengan fasilitas berkualitas tinggi untuk menunjang kenyamanan
            tinggal anda.
          </p>
          <div className="flex gap-[30px] md:gap-[132px] mt-[26px] md:mt-[45px]">
            <p className="text-[14px] md:text-[40px] font-bold text-color1">
              121 <span className="text-[10px] md:text-[30px]">units</span>
            </p>
            <p className="text-[14px] md:text-[40px] font-bold text-color1">
              64 <span className="text-[10px] md:text-[30px]">sold</span>
            </p>
            <p className="text-[14px] md:text-[40px] font-bold text-color1">
              17 <span className="text-[10px] md:text-[30px]">build</span>
            </p>
          </div>
          <div className="mt-[27px] md:mt-[70px]">
            <ReadMoreButton />
          </div>
        </div>
        <div className="w-[180px] md:w-[1340px] border-b-[2px] md:border-b-[6px] border-color1 absolute bottom-5 md:bottom-40 left-40 z-0 "></div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default AboutUs;
