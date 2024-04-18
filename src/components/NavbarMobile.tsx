"use client";
import * as React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { eventGA } from "@/lib/gtag";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-scroll";
import { IoAlertCircle } from "react-icons/io5";
import { Button } from "./ui/button";

interface INavbarMobileProps {}

const NavbarMobile: React.FunctionComponent<INavbarMobileProps> = (props) => {
  const [activeNav, setActivenav] = React.useState<Boolean>(false);
  const [active, setActive] = React.useState<Boolean>(false);
  const [activeSite, setActiveSite] = React.useState<Boolean>(false);
  const [activeAlert, setActiveAlert] = React.useState<Boolean>(false);
  const [getData, setGetData] = React.useState<any>({
    name: "",
    email: "",
    wa: "",
    domicile: "",
    type: "",
    plan: "",
  });

  return (
    <div className="fixed w-full block md:hidden z-[99]">
      <div className="h-[60px] flex justify-between  py-3 relative opacity-[90%] bg-[#E9E9E9] z-20"></div>
      <div className="absolute top-0 z-50 flex justify-between items-center w-full h-[60px] px-[30px]">
        <Image src={"/logo-muliavillage.png"} alt="" width={40} height={40} />
        <RxHamburgerMenu
          width={130}
          height={130}
          className="text-color1"
          onClick={() => setActivenav(!activeNav)}
        />

        <button
          className=" transform -rotate-90  whitespace-nowrap fixed -right-[90px] bottom-[20%] py-5 px-10 bg-black"
          onClick={() => {
            setActive(!active);
          }}
        >
          <p className="text-[10px] font-bold text-white">
            Download E-Brochure Here
          </p>
        </button>
      </div>

      {activeNav ? (
        <div className="w-[390px] h-fit  absolute left-0 top-[60px] text-color1 rounded-b-[10px] opacity-[90%] bg-[#E9E9E9] text-right px-10 py-5 ">
          <div className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
            <Link to="home" smooth={true} duration={2500}>
              Home
            </Link>
          </div>
          <div className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
            <Link to="aboutus" smooth={true} duration={2500}>
              About Us
            </Link>
          </div>
          <div className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
            <Link to="contact" smooth={true} duration={2500}>
              Contact
            </Link>
          </div>
          <div className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium">
            <Link to="product" smooth={true} duration={2500}>
              Product
            </Link>
          </div>

          <button
            className="border-b-gray-300  border-b-[0.1px] border-t-gray-300  border-t-[0.1px] py-2 text-[14px] font-medium"
            onClick={() => {
              setActiveSite(!activeSite);
            }}
          >
            Site Plan
          </button>
        </div>
      ) : (
        <></>
      )}

      {activeSite ? (
        <div className="fixed  w-full h-full z-[999]">
          <div className="absolute bg-black w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm z-[36]"></div>

          <IoMdCloseCircleOutline
            className="absolute z-[402] text-black w-[42px]  h-[42px]  cursor-pointer left-[84%] md:left-[68%] top-[71px]"
            onClick={() => {
              setActiveSite(!activeSite);
            }}
          />

          <Image
            src={"/siteplan.png"}
            alt=""
            width={350}
            height={350}
            className="absolute z-[319] top-20 left-5"
          />
        </div>
      ) : (
        <></>
      )}

      {active ? (
        <div className=" w-full h-[742.5px] top-0 ">
          <div className="absolute bg-black min-w-[390px] w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm z-[62] left-0 top-0"></div>
          <div className="w-full  h-[20px]"></div>
          <RiCloseLine
            className="absolute top-10 right-5 w-[35px] h-[35px] z-[209] cursor-pointer text-white"
            onClick={() => {
              setActive(!active);
              setActiveAlert(false);
            }}
          />

          <div className="absolute z-[99] left-[7%] top-10">
            <Image
              src={"/logowhite.png"}
              alt=""
              width={65}
              height={65}
              className="m-auto "
            />
            <div className="flex flex-col gap-4 items-center h-fit justify-center mt-[37px]">
              <input
                type="text"
                className="w-[340px] h-[40px] text-[10px] px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
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
                className="w-[340px] h-[40px] text-[10px] px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
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
                className="w-[340px] h-[40px] text-[10px] px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
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
                className="w-[340px] h-[40px] text-[10px] px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                placeholder="Kota Domisili"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    domicile: element.target.value,
                  };
                  setGetData(newData);
                }}
              />

              <select
                id="type-rumah"
                name="type-rumah"
                className="w-[340px] h-[40px] text-[10px] px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                // className=" w-[340px]  h-[50px] text-gray-400 px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    type: element.target.value,
                  };
                  setGetData(newData);
                }}
              >
                <option value="" disabled selected hidden>
                  Type Rumah
                </option>
                <option value="Gamal" className="h-[20px]">
                  Type Gamal ( 36 / 75 )
                </option>
                <option value="Ibtisaam">Type Ibtisaam ( 45 / 84 ) </option>
                <option value="Kafeel">Type Kafeel ( 54 / 75 )</option>
                <option value="Mahdiy ">Type Mahdiy ( 60 / 84 )</option>
                <option value="Pahleevi  ">Type Pahleevi ( 90 / 100 ) </option>
              </select>

              <select
                id="type-rumah"
                name="type-rumah"
                className="w-[340px] h-[40px] text-[10px] px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                // className=" w-[340px]  h-[50px] text-gray-400  px-[20px] rounded-md border-[1.6px] border-color1 bg-[#E9E9E9]"
                onChange={(element: any) => {
                  const newData = {
                    ...getData,
                    plan: element.target.value,
                  };
                  setGetData(newData);
                }}
              >
                <option value="" disabled selected hidden>
                  Rencana Beli
                </option>
                <option value="bulan-depan">Bulan depan</option>
                <option value="belum-tahu">Belum tahu</option>
                <option value="waktu-dekat">Dalam waktu dekat</option>
              </select>
            </div>
            <div className="w-full h-[33px] mt-5">
              {activeAlert ? (
                <div className="w-fit h-[30px] m-auto px-[8px] py-1 rounded-2xl bg-gray-100 opacity-70">
                  <div className="flex justify-center items-center gap-2">
                    <IoAlertCircle className="text-red-600 w-[24px] h-[24px]" />
                    <p className="text-[10px] text-red-600  w-fit font-medium ">
                      Invalid, please fill all data !
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className=" h-fit flex text-[10px] justify-center mt-[10px] cursor-pointer">
              <a
                onClick={() => {
                  eventGA({
                    action: "event_contactus_landing",
                    category: "user_contact",
                    label: `${getData.name}, ${getData.wa}`,
                  });
                  {
                    !Object.values(getData).includes("")
                      ? window.open(
                          `https://wa.me/+628981250103?text=🏠 *Halo Mulia Village!* %0A%0A*Nama*: *${getData.name}*%0A*Email*: *${getData.email}*%0A*Nomor WhatsApp*: *${getData.wa}*%0A*Domisili*: *${getData.domicile}*%0A*Tipe*: *${getData.type}*%0A*Plan*: *${getData.plan}*%0A%0ASelamat mencari rumah impian Anda! Kami siap membantu Anda dalam proses ini. 😊`
                        )
                      : setActiveAlert(true);
                  }

                  {
                    !Object.values(getData).includes("")
                      ? setActiveAlert(false)
                      : setActiveAlert(true);
                  }
                }}
                className=" text-[16px]  border-[2px] bg-color1 text-white font-medium  rounded-[10px]  py-[4px] px-[20px] "

                // href={`https://wa.me/+6289644115873?text=🏠%20*Halo%20${getData.name}!*%20%0A%0A*Nama*:%20**${getData.name}**%0A*Email*:%20**${getData.email}**%0A*Nomor%20WhatsApp*:%20**${getData.wa}**%0A*Domisili*:%20**${getData.domicile}**%0A*Tipe*:%20**${getData.type}**%0A*Plan*:%20**${getData.plan}**%0A%0ASelamat%20mencari%20rumah%20impian%20Anda!%20Kami%20siap%20membantu%20Anda%20dalam%20proses%20ini.%20😊`}
              >
                <div className="md:w-[215px]">
                  Contact <span className="font-playfair italic ">Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
    // -right-[224px]
  );
};

export default NavbarMobile;
