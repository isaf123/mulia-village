import * as React from "react";

interface ICardFasilitasProps {
  url: string;
  deskripsi: string;
  judul1: string;
  judul2: string;
  judul3: string;
}

const CardFasilitas: React.FunctionComponent<ICardFasilitasProps> = (props) => {
  return (
    <section className="min-w-[176px] md:min-w-[1292px] md:min-h-[886px] bg-white flex md:flex-row flex-col mb-[95px] md:mb-0   ">
      <div className="w-[176px] md:w-[505px] h-[210px] md:h-[886px] flex flex-col order-2 md:order-1 ">
        <div className="h-[185px] md:h-[694px]   text-color1 ">
          <h1 className="pt-[15px] md:pt-[226px] pl-0 md:pl-[56px] text-[16px] md:text-[60px] font-semibold text-center md:text-left ">
            {props.judul1} <br />
            <span className=" font-playfair italic">{props.judul2}</span>{" "}
            <span className=" text-color2">{props.judul3}</span>
          </h1>
          <div className="mt-[12px] md:mt-[69px] border-t md:border-t-2 border-color1 mx-[80px] md:ml-[56px] md:mr-[300px] "></div>
          <h1 className="mt-[19px] md:mt-[48px] pl-[10px] md:pl-[56px] pr-[10px] md:pr-[20px] pb-[72px] text-[10px] md:text-[20px] leading-[12px] md:leading-[24px] ">
            {props.deskripsi}
          </h1>
        </div>
        <div className=" h-[25px] md:h-[192px]  bg-color1 ">
          <h1 className="pt-[5px] md:pt-[129px] pb-[5px] md:pb-0 ml-[111px] md:ml-[27px] text-[6px]  md:text-[18px] text-[#E9E9E9] opacity-60 ">
            Mulia Village Juanda
          </h1>
          <div className="border-b ml-[100px] md:ml-0 mr-0 md:mr-[200px]"></div>
        </div>
      </div>
      <div className="bg-cover order-1 md:order-2">
        <img
          className="w-[176px] h-[170px] md:h-[886px] md:w-[787px]"
          src={props.url}
          alt=""
        />
      </div>
    </section>
  );
};

export default CardFasilitas;
