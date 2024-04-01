import * as React from "react";
import Image from "next/image";

interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  return (
    <div className="absolute w-full hidden md:block">
      <div className="h-[140px] flex justify-between  py-3 relative opacity-[50%] bg-white z-20"></div>
      <div className="absolute top-0 z-50 flex justify-between items-center w-full h-[140px] px-[30px]">
        <Image src={"/logo-muliavillage.png"} alt="" width={120} height={120} />
        <div
          className="text-lg text-color1 flex gap-20  items-center text-[25px]
        "
        >
          <p className="hover:font-bold cursor-pointer w-fit">Home</p>
          <p className="hover:font-bold cursor-pointer w-fit">About Us</p>
          <p className="hover:font-bold cursor-pointer w-fit">Contact</p>
          <p className="hover:font-bold cursor-pointer w-fit">Product</p>
          <p className="hover:font-bold cursor-pointer w-fit">Site plan</p>
          <p className="hover:font-bold cursor-pointer w-fit">Info</p>
          <p className="hover:font-bold cursor-pointer w-fit">Promo</p>
        </div>
        <button className=" transform -rotate-90  whitespace-nowrap fixed -right-[224px] top-[50%] py-10 px-20 bg-black">
          <p className="text-[30px]  text-white">Download E-Brochure Here</p>
        </button>
      </div>
    </div>
  );
};

export default NavbarDesktop;
