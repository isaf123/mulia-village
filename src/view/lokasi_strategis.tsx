import * as React from "react";
import Image from "next/image";
import LokasiStrategisComponent1 from "@/components/LokasiStrategisComponent1";
import LokasiStrategisComponent2 from "@/components/LokasiStrategisComponent2";
import LokasiStrategisComponent3 from "@/components/LokasiStrategisComponent3";

interface ILokasiStrategisProps {}

const LokasiStrategis: React.FunctionComponent<ILokasiStrategisProps> = (
  props
) => {
  return (
    <div>
      {/* heading desktop version */}
      <div className="text-7xl justify-center md:flex w-full hidden">
        <h1 className="font-poppins font-bold text-color2 md:text-color1 text-center">
          Lokasi
        </h1>
        <h1 className="font-playfair text-color1 md:text-color2 text-center italic">
          Strategis
        </h1>
      </div>
      <div className="md:flex justify-end mt-5 hidden">
        <div className="w-[861px] h-[6px] bg-color1 mb-10"></div>
      </div>

      {/* heading mobile version */}
      <div className=" flex w-[390px] md:hidden mt-[4rem]">
        <div className="bg-color1 w-1/2 h-[50px]">
          <h1 className="font-poppins font-bold text-color2 text-end mt-3">
            Lokasi
          </h1>
        </div>
        <div className="w-1/2 h-[50px] border-b-2 border-color1">
          <h1 className="font-playfair text-color1 text-start italic mt-3">
            Strategis
          </h1>
        </div>

        <div className="md:hidden justify-end mt-5 flex">
          <div className="w-1/2 h-[6px] bg-red-500 mb-10"></div>
        </div>
      </div>
      <LokasiStrategisComponent1 />
      <LokasiStrategisComponent2 />
      <LokasiStrategisComponent3 />
    </div>
  );
};

export default LokasiStrategis;
