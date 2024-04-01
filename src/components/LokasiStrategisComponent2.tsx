"use client";
import * as React from "react";
import Image from "next/image";

interface ILokasiStrategisComponent2Props {}

const LokasiStrategisComponent2: React.FunctionComponent<
  ILokasiStrategisComponent2Props
> = (props) => {
  return (
    <section className="mb-[10rem]">
      <div className="flex">
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
              Tinggal dekat dengan rumah sakit memberikan rasa aman dan nyaman
              bagi penghuni Mulia Village. Sehingga mengurangi kekhawatiran
              dalam menghadapi situasi darurat kesehatan.
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
    </section>
  );
};

export default LokasiStrategisComponent2;
