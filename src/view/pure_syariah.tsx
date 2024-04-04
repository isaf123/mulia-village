import * as React from "react";

interface IPureSyariahProps {}

const PureSyariah: React.FunctionComponent<IPureSyariahProps> = (props) => {
  return (
    <section className="relative w-[390px] md:w-full md:h-auto mt-10">
      <img
        id="image-for-mobile"
        src="syariah2.webp"
        alt="syariah"
        className="w-[390px] block md:hidden"
      />
      <img
        id="image-for-desktop"
        src="syariah.webp"
        alt="syariah"
        className="w-full hidden md:block"
      />
      <div className="absolute w-[200px] top-[25px] right-0 md:top-[80px] md:right-[200px] ">
        <h1 className="text-color2 text-lg md:text-7xl font-bold md:mb-6">
          Pure Syariah
        </h1>
        <div className="bg-color1 w-[125px] md:w-[520px] h-[2px] md:h-[6px] md:mb-8" />
        <h1 className="text-color1 font-playfair italic text-lg md:text-7xl font-bold md:ml-40">
          Menambah Keberkahan
        </h1>
      </div>

      <div className="bg-color1 w-[140px] md:w-[561px] h-[2px] md:h-[6px] absolute top-[85px] right-0 md:top-[330px] text-7xl"></div>

      <article className="absolute top-[102px] text-color1 font-semibold md:top-[500px] md:right-0 right-[20px] w-[117px] md:w-[580px] text-[10px] leading-tight md:text-3xl md:mr-20 text-right">
        Lebih aman & berkah proses pembeliannya dengan skema syariah dan 7 Tanpa
        : <br />
        Tanpa Bunga, Tanpa Riba, Tanpa Sita, Tanpa BI Checking, Tanpa Asuransi,
        Tanpa Akad Bathil, dan Tanpa Denda
      </article>
    </section>
  );
};

export default PureSyariah;
