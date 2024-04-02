import * as React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

interface INavbarMobileProps {}

const NavbarMobile: React.FunctionComponent<INavbarMobileProps> = (props) => {
  return (
    <div className="absolute w-full block md:hidden">
      <div className="h-[60px] flex justify-between  py-3 relative opacity-[50%] bg-white z-20"></div>
      <div className="absolute top-0 z-50 flex justify-between items-center w-full h-[60px] px-[30px]">
        <Image src={"/logo-muliavillage.png"} alt="" width={40} height={40} />
        <RxHamburgerMenu width={130} height={130} className="text-color1" />

        <button className=" transform -rotate-90  whitespace-nowrap fixed -right-[90px] bottom-[20%] py-5 px-10 bg-black">
          <p className="text-[10px] font-bold text-white">
            Download E-Brochure Here
          </p>
        </button>
      </div>
    </div>
    // -right-[224px]
  );
};

export default NavbarMobile;
