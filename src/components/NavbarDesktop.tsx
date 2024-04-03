"use client";
import * as React from "react";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";
import { eventGA } from "@/lib/gtag";

interface INavbarDesktopProps {}

const NavbarDesktop: React.FunctionComponent<INavbarDesktopProps> = (props) => {
  const [active, setActive] = React.useState<Boolean>(false);
  const [getData, setGetData] = React.useState<any>({
    name: "",
    email: "",
    wa: "",
    domicile: "",
    type: "",
    plan: "",
  });

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
      <a href=""></a>

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
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    name: element.target.value,
                  };
                  setGetData(newData);
                }}
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="E-mail"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    email: element.target.value,
                  };
                  setGetData(newData);
                }}
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="No. Whatsapp"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    wa: element.target.value,
                  };
                  setGetData(newData);
                }}
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Kota Domisili"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    domicile: element.target.value,
                  };
                  setGetData(newData);
                }}
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Type Rumah"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    type: element.target.value,
                  };
                  setGetData(newData);
                }}
              />
              <input
                type="text"
                className="w-[410px] h-[40px] px-[20px] py-[26px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Rencana Beli"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    plan: element.target.value,
                  };
                  setGetData(newData);
                }}
              />
            </div>
            <div className="w-full h-fit flex justify-center mt-[40px]">
              <button
                onClick={() => {
                  eventGA({
                    action: "event_contactus_landing",
                    category: "user_contact",
                    label: `${getData.name}, ${getData.wa}`,
                  });
                  window.open(
                    `https://wa.me/+6289644115873?text=🏠 *Halo ${getData.name}!* %0A%0A*Nama*: **${getData.name}**%0A*Email*: **${getData.email}**%0A*Nomor WhatsApp*: **${getData.wa}**%0A*Domisili*: **${getData.domicile}**%0A*Tipe*: **${getData.type}**%0A*Plan*: **${getData.plan}**%0A%0ASelamat mencari rumah impian Anda! Kami siap membantu Anda dalam proses ini. 😊`
                  );
                }}
                className=" text-[24px]  border-[2px] bg-color1 text-white font-medium  rounded-[10px]  py-[4px] px-[20px] "
              >
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
