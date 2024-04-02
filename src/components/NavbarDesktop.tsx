"use client";
import * as React from "react";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";

interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  const [active, setActive] = React.useState<Boolean>(false);
  return (
    <div className="fixed w-full hidden md:block top-0 z-[99]">
      <div className="h-[140px] flex justify-between py-3 relative opacity-[50%] bg-white z-20"></div>
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
        </div>
      </div>

      {active ? (
        <div className="relative w-[600px] h-[742.5px] left-[35%]">
          <RiCloseLine
            className="absolute top-10 right-10 w-[40px] h-[40px] z-[209] cursor-pointer text-white"
            onClick={() => {
              setActive(!active);
            }}
          />
          <Image
            src={"/frompic.png"}
            alt=""
            width={600}
            height={742}
            className="absolute z-[5] rounded-xl"
          />
          <div className="absolute z-[99] w-[600px] h-[742.5px]">
            <Image
              src={"/logowhite.png"}
              alt=""
              width={90}
              height={90}
              className="m-auto mt-[51px]"
            />
            <div className="flex flex-col gap-4 items-center h-fit justify-center mt-[37px]">
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Nama Lengkap"
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="No. Whatsapp"
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Kota Domisili"
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Type Rumah"
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Rencana Beli"
              />
            </div>
            <div className="w-full h-fit flex justify-center mt-[40px]">
              <button className=" text-[24px]  border-[2px] bg-color1 text-white font-medium  rounded-[10px]  py-[4px] px-[20px] ">
                <div className="md:w-[215px]">
                  Contact{" "}
                  <span className="font-playfair italic font-normal">Us</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <button
        className=" transform -rotate-90  whitespace-nowrap fixed -right-[196px] top-[50%] py-8 px-20 bg-black"
        onClick={() => {
          setActive(true);
        }}
      >
        <p className="text-[24px]  text-white">Download E-Brochure Here</p>
      </button>
    </div>
  );
};

export default NavbarDesktop;
