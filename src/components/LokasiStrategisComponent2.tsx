"use client";
import * as React from "react";
import Image from "next/image";

interface ILokasiStrategisComponent2Props {}

const LokasiStrategisComponent2: React.FunctionComponent<
  ILokasiStrategisComponent2Props
> = (props) => {
  return (
    <section className="mb-[5rem] md:mb-[10rem]">
      {/* desktop version */}
      <div className="hidden md:flex">
        <div className="">
          <div className="h-[374px] w-[850px] bg-color1 py-[50px] flex flex-col text-right ">
            <h1 className="text-color2 text-5xl mr-[50px]">
              <b>15 min</b> to
            </h1>
            <div className="text-4xl font-semibold text-white mt-14">
              <h1 className="tracking-widest mr-[50px]">
                Mitra Keluarga <br />
                Hospital
              </h1>
            </div>
          </div>
          <div className="border-color1 border-b-8 w-[850px] h-[336px] text-2xl  py-[50px] pr-[50px] f">
            <h1 className="text-right">
              Perjalanan menuju bandara menjadi lebih cepat dan efisien. Sangat
              menguntungkan untuk para pekerja yang membutuhkan mobilisasi yang
              cukup tinggi.
            </h1>
          </div>
        </div>
        <div id="itskampus" className="rounded-r-md">
          <Image
            width="900"
            height="710"
            src="/t2juanda.webp"
            alt="its"
            className="object-cover"
          ></Image>
        </div>
      </div>

      {/* mobile version */}

      <div className="flex w-[390px] md:hidden">
        <div className="flex flex-col">
          <div className="h-[126px] bg-color1 w-[189px] flex flex-col text-right p-3">
            <h1 className="text-color2 text-xl">
              <b>15 min</b> to
            </h1>
            <div className="text-xs font-semibold text-white mt-2">
              <h1 className="tracking-widest">
                Mitra Keluarga <br />
                Hospital
              </h1>
            </div>
          </div>
          <div className="border-color1 border-b-2 h-[169px] w-[189px] text-xs p-3 pt-5">
            <h1 className="text-right">
              Perjalanan menuju bandara menjadi lebih cepat dan efisien. Sangat
              menguntungkan untuk para pekerja yang membutuhkan mobilisasi yang
              cukup tinggi.
            </h1>
          </div>
        </div>
        <div id="itskampus" className="rounded-r-md">
          <Image
            width="182"
            height="326"
            src="/t2juanda2.webp"
            alt="its"
            className="object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default LokasiStrategisComponent2;
