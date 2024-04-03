"use client";
import * as React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

interface INavbarMobileProps {}

const NavbarMobile: React.FunctionComponent<INavbarMobileProps> = (props) => {
  const [active, setActive] = React.useState<Boolean>(false);
  const [html, sethtml] = React.useState<any>();

  <div className="w-[390px] h-fit  absolute left-0 top-[60px] text-color1 rounded-b-[10px] opacity-[90%] bg-[#E9E9E9] text-right px-10 py-5">
    <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2">
      Home
    </p>
    <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2">
      About Us
    </p>
    <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2">
      Contact
    </p>
    <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2">
      Product
    </p>
  </div>;

  return (
    <div className="fixed w-full block md:hidden z-[99]">
      <div className="h-[60px] flex justify-between  py-3 relative opacity-[90%] bg-[#E9E9E9] z-20"></div>
      <div className="absolute top-0 z-50 flex justify-between items-center w-full h-[60px] px-[30px]">
        <Image src={"/logo-muliavillage.png"} alt="" width={40} height={40} />
        <RxHamburgerMenu
          width={130}
          height={130}
          className="text-color1"
          onClick={() => setActive(!active)}
        />
        {active ? (
          <div className="w-[390px] h-fit  absolute left-0 top-[60px] text-color1 rounded-b-[10px] opacity-[90%] bg-[#E9E9E9] text-right px-10 py-5 ">
            <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
              Home
            </p>
            <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
              About Us
            </p>
            <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
              Contact
            </p>
            <p className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
              Product
            </p>
          </div>
        ) : (
          <></>
        )}

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
