"use client";
import * as React from "react";
import Image from "next/image";
import { eventGA } from "@/lib/gtag";
import { RiCloseLine } from "react-icons/ri";

interface ICardTypeProps {
  children: string;
  wide: string;
  bedroom: string;
  bathroom: string;
  carport: string;
  src: string;
  spek: string;
}

const CardType: React.FunctionComponent<ICardTypeProps> = (props) => {
  const [active, setActive] = React.useState<Boolean>(false);
  return (
    <div className="h-fit w-[365px] md:w-[540px] rounded-[20px]">
      {active ? (
        <div className="w-full h-full z-[9999]">
          <div
            className="absolute bg-black w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm z-[62] left-0 top-0"
            onClick={() => {
              setActive(!active);
            }}
          ></div>
          <Image
            src={props.spek}
            width={1420}
            height={3400}
            alt=""
            className="absolute z-[63] md:right-[14%] hidden md:block"
          />
          <Image
            src={props.spek}
            width={360}
            height={400}
            alt=""
            className="absolute z-[63] md:right-[14%] block md:hidden"
          />
          <RiCloseLine
            className="absolute right-[8%] md:right-[15%] w-[34px] md:w-[70px] h-[34px] md:h-[70px] z-[209] cursor-pointer text-white"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
      ) : (
        <></>
      )}

      <Image
        src={props.src}
        alt=""
        width={900}
        height={640}
        className="rounded-t-[20px]"
      />

      <div className="w-full h-[42px] md:h-[70px] bg-color1 font-playfair text-[24px] md:text-[40px] italic text-white flex items-center justify-center">
        <p>
          Type{" "}
          <span className="font-poppins text-color2 not-italic font-bold">
            {props.children}
          </span>
        </p>
      </div>
      <div className="w-full h-[200px] md:h-[320px] bg-white border-[2px] border-color1 rounded-b-[20px]">
        <h3 className="text-[18px] md:text-[30px] font-bold w-fit m-auto mt-[10px] md:mt-[34px] text-color1">
          Luas : {props.wide}
        </h3>
        <div className="mt-[16px] md:mt-[40px] flex justify-between px-6">
          <div className="w-fit">
            <Image
              src={"/bedpic.png"}
              alt=""
              width={50}
              height={50}
              className="m-auto hidden md:block"
            />
            <Image
              src={"/bedpic.png"}
              alt=""
              width={30}
              height={30}
              className="m-auto block md:hidden"
            />
            <p className="text-[16px] md:text-[20px] m-auto font-normal md:font-bold w-fit text-color1">
              {props.bedroom}
            </p>
          </div>

          <div className="w-fit">
            <Image
              src={"/carpic.png"}
              alt=""
              width={50}
              height={50}
              className="m-auto hidden md:block"
            />
            <Image
              src={"/carpic.png"}
              alt=""
              width={30}
              height={30}
              className="m-auto block md:hidden"
            />
            <p className="text-[16px] md:text-[20px] m-auto font-normal md:font-bold w-fit text-color1">
              {props.bathroom}
            </p>
          </div>

          <div className="w-fit">
            <Image
              src={"/bathpic.png"}
              alt=""
              width={50}
              height={50}
              className="m-auto hidden md:block"
            />
            <Image
              src={"/bathpic.png"}
              alt=""
              width={30}
              height={30}
              className="m-auto block md:hidden"
            />
            <p className="text-[16px] md:text-[20px] m-auto font-normal md:font-bold w-fit text-color1">
              {props.carport}
            </p>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center mt-[24px]">
          <button
            onClick={() => {
              setActive(!active);
              eventGA({
                action: "event_click_landing",
                category: "type_rumah",
                label: props.children,
              });
            }}
            className="
          text-[14px] md:text-[24px] border-[0.6px] md:border-[2px]
         border-color1 text-color1 font-playfair italic
         rounded-[6px] md:rounded-[20px] p-[6px] w-[180px] md:w-[320px]
         md:py-[10px] md:px-[40px] hover:bg-color1 hover:text-[#E9E9E9] transition duration-180 ease-in"
          >
            <div>
              View{" "}
              <span
                className="font-poppins
             not-italic font-bold"
              >
                More Details
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardType;
