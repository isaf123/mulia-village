import * as React from "react";
import Image from "next/image";

interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  return (
    <div className="w-full h-fit flex justify-between bg-white px-10 py-8">
      <Image src={"/logo-muliavillage.png"} alt="" width={20} height={16} />
      <div
        className="text-lg text-color2 flex gap-6
      "
      >
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Product</p>
        <p>Site plan</p>
        <p>Info</p>
        <p>Promo</p>
      </div>
    </div>
  );
};

export default NavbarDesktop;
