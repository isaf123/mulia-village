import * as React from "react";
import Image from "next/image";

interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <div>
      <div className="relative top-0 w-full h-[460px] md:h-[1080px] ">
        <Image
          src="/pintu.png"
          alt=""
          width={2200}
          height={1080}
          className="hidden md:block"
        />

        <Image
          src="/herophoto2.png"
          alt=""
          width={390}
          height={460}
          className="block md:hidden"
        />
      </div>
      <div className="w-full h-fit absolute top-[150px] md:top-[413px] flex items-center md:pl-[142px] ">
        <div className="text-center md:text-left m-auto md:m-0">
          <div className="text-[20px] md:text-7xl leading-1">
            <h2 className="font-poppins font-bold  text-color1 md:mb-5">
              Find more{" "}
              <span className="font-playfair italic text-color2">joy</span> &{" "}
              <span className="font-playfair italic text-color2">Healthy</span>
            </h2>
            <h2 className="font-poppins font-bold text-color1 md:mb-5">
              Living in our luxurious
            </h2>
            <h2 className="font-poppins font-bold text-color1">
              <span className="font-playfair italic text-color2">Islamic</span>{" "}
              House
            </h2>
          </div>

          <h3 className="text-color1 text-[12px] md:text-[24px] w-[270px] md:w-[900px] md:mt-40">
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
