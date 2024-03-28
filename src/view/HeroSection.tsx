import * as React from "react";
import Image from "next/image";

interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <div>
      <div className="relative top-0 w-full h-[1080px] bg-red-500 z-0">
        <Image src="/pintu.png" alt="" width={2200} height={1080} />
      </div>
      <div className="w-full h-[1080px] absolute top-0 flex items-center pl-32 pt-[400px]">
        <div>
          <h2 className="font-poppins font-bold text-8xl text-color1 mb-5">
            Find more{" "}
            <span className="font-playfair italic text-color2">joy</span> &{" "}
            <span className="font-playfair italic text-color2">Healthy</span>
          </h2>
          <h2 className="font-poppins font-bold text-8xl text-color1 mb-5">
            Living in our luxurious
          </h2>
          <h2 className="font-poppins font-bold text-8xl text-color1">
            <span className="font-playfair italic text-color2">Islamic</span>{" "}
            House
          </h2>

          <h3 className="text-color1 text-[30px] w-[900px] mt-52">
            Welcome to a community where Shariah principles guide every aspect
            of life, fostering a sense of unity and righteousness among
            residents.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
