import * as React from "react";
import Image from "next/image";

interface ICardTypeProps {}

const CardType: React.FunctionComponent<ICardTypeProps> = (props) => {
  return (
    <div className="h-fit w-[820px] rounded-[20px]">
      <Image
        src="/gamal.jpg"
        alt=""
        width={900}
        height={640}
        className="rounded-t-[20px]"
      />

      <div className="w-full h-[106px] bg-color1 font-playfair text-[50px] italic text-white flex items-center justify-center">
        <p>
          Type{" "}
          <span className="font-poppins text-color2 not-italic font-bold">
            Gamal
          </span>
        </p>
      </div>
      <div className="w-full h-[386px] bg-white border-[2px] border-color1 rounded-b-[20px]">
        <h3 className="text-[36px] font-bold w-fit m-auto mt-[34px] text-color1">
          Luas : 36/75
        </h3>
        <div className="mt-[56px] flex justify-between px-20">
          <div className="w-[144px]">
            <Image
              src={"/bedpic.png"}
              alt=""
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-[24px] font-bold w-fit text-color1">2 bedroom</p>
          </div>

          <div className="w-[144px]">
            <Image
              src={"/carpic.png"}
              alt=""
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-[24px] font-bold w-fit text-color1">
              1 bathroom
            </p>
          </div>

          <div className="w-[154px]">
            <Image
              src={"/bathpic.png"}
              alt=""
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-[24px] font-bold w-fit text-color1">
              2 bathroom
            </p>
          </div>
        </div>
        <button className="text-[10px] md:text-[30px] border-[0.6px] md:border-[2px] border-color1 text-color1 font-bold rounded-[6px] md:rounded-[20px] p-[6px] md:py-[20px] md:px-[20px] hover:bg-color1 hover:text-[#E9E9E9] transition duration-180 ease-in">
          <div>
            Read <span className="font-playfair italic font-normal">More</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardType;
