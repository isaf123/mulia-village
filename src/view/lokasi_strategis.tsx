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
      <div className="text-7xl justify-center flex">
        <h1 className="font-poppins font-bold text-color1 text-center">
          Lokasi
        </h1>
        <h1 className="font-playfair text-color2 text-center italic">
          Strategis
        </h1>
      </div>
      <div className="flex justify-end mt-5">
        <div className="w-[861px] h-[6px] bg-color1 mb-10"></div>
      </div>
      <LokasiStrategisComponent1 />
      <LokasiStrategisComponent2 />
      <LokasiStrategisComponent3 />
    </div>
  );
};

export default LokasiStrategis;
