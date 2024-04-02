import * as React from "react";
import Divider2 from "@/components/DIvider2";
import CardType from "@/components/CardType";
import typeHouse from "@/utils/typehouse";

interface ITypeRumahProps {}

const TypeRumah: React.FunctionComponent<ITypeRumahProps> = (props) => {
  const mapping = () => {
    return typeHouse.map((val: any, idx: number) => {
      return (
        <CardType
          src={val.src}
          wide={val.wide}
          bedroom={val.bedroom}
          bathroom={val.bathroom}
          carport={val.carport}
          key={idx}
        >
          {val.type}
        </CardType>
      );
    });
  };

  return (
    <div className="h-fit mb-[70px]">
      <div className="mt-[40px] mb-[36px] md:mb-[136px]">
        <Divider2>Type Rumah</Divider2>
      </div>
      <h3 className="text-center text-[12px] md:text-[24px] m-auto text-color1 w-[390px] md:w-[1510px] px-6 md:px-0">
        Dengan 5 type desain yang mewah dan minimalis, Mulia Village Juanda
        menjadi pilihan ideal untuk masa depan Anda. Tinggi plafon yang
        mengagumkan akan memperbaiki sirkulasi udara, memberikan kesegaran bagi
        rumah Anda. Dengan 2 carport yang luas, Anda tidak perlu khawatir lagi
        tentang tempat parkir untuk kendaraan pribadi Anda.
      </h3>

      <div className="flex flex-wrap w-[390px] md:w-[1900px] h-fit gap-10 md:gap-10 justify-center mt-[45px] md:mt-[70px]">

        {mapping()}
      </div>
    </div>
  );
};

export default TypeRumah;
