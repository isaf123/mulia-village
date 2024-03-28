import * as React from "react";
import Image from "next/image";
interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
  return (
    <div className="w-full h-[1080px] px-10  mt-40">
      <div className="flex ">
        <div className="w-[40%] flex justify-end">
          <div className="w-[360px] h-[478px] bg-color1">
            <Image
              src="/fotopot.png"
              alt=""
              width={920}
              height={2000}
              className="top-4 right-4 relative"
            />
          </div>
        </div>

        <div className="pl-20 w-full">
          <div className=" flex items-center mb-20">
            <h2 className="font-bold text-color1 text-[70px] w-[600px]">
              About <span className="italic  font-playfair">Us</span>
            </h2>
            <div className="w-full border-b-4 border-color1"></div>
          </div>
          <h2 className="text-[60px] text-color2 font-playfair italic">
            Welcome to
          </h2>
          <h2 className="text-[60px] text-color1 font-poppins font-bold">
            Mulia village Juanda
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
