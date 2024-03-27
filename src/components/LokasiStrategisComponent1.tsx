"use client";
import * as React from "react";
import Image from "next/image";

interface ILokasiStrategisComponent1Props {}

const LokasiStrategisComponent1: React.FunctionComponent<
  ILokasiStrategisComponent1Props
> = (props) => {
  return (
    <section className="mb-[10rem] mt-[7rem]">
      <div className="flex justify-end">
        <div id="itskampus">
          <Image
            width="900"
            height="710"
            src="/its.webp"
            alt="its"
            className="object-cover"
          ></Image>
        </div>
        <div className="flex flex-col">
          <div className="h-[374px] w-[850px] bg-color1 py-[50px] pl-[50px] ">
            <h1 className="text-color2 text-5xl">
              <b>5 min</b> to
            </h1>
            <div className="w-[30rem] text-4xl font-semibold text-white mt-14">
              <h1 className="tracking-widest">
                ITS campus <br />
                (Institut Teknologi Sepuluh Nopember)
              </h1>
            </div>
          </div>
          <div className="border-color1 border-b-8 w-[850px] h-[336px] text-2xl pl-[50px] py-[50px] pr-[150px]">
            Aksesibilitas yang mudah berlokasikan dekat dengan kampus ITS
            membuat perjalanan menjadi lebih cepat dan efisien bagi mahasiswa,
            dosen, dan tenaga pendidik lainnya.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LokasiStrategisComponent1;
