import * as React from "react";
import Image from "next/image";

interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  return (
    <div className="w-full h-fit flex justify-between bg-white px-10 py-8">
      <Image src={"/logo-muliavillage.png"} alt="" width={20} height={16} />
      <div
        className="text-lg text-color1 flex justify-between
      "
      >
        <p className="hover:font-bold cursor-pointer font-playfair italic">
          Home
        </p>
        <p className="hover:font-bold cursor-pointer font-poppins">About Us</p>
        <p className="hover:font-bold cursor-pointer">Contact</p>
        <p className="hover:font-bold cursor-pointer">Product</p>
        <p className="hover:font-bold cursor-pointer">Site plan</p>
        <p className="hover:font-bold cursor-pointer">Info</p>
        <p className="hover:font-bold cursor-pointer">Promo</p>
      </div>
    </div>
  );
};

export default NavbarDesktop;
