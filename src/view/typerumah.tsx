import * as React from "react";
import Divider2 from "@/components/DIvider2";
import CardType from "@/components/CardType";

interface ITypeRumahProps {}

const TypeRumah: React.FunctionComponent<ITypeRumahProps> = (props) => {
  return (
    <div>
      <div className="mt-[408px] mb-[136px]">
        <Divider2>Type Rumah</Divider2>
      </div>
      <h3 className="text-center text-[24px] m-auto text-color1 w-[1510px]">
        Dengan 5 type desain yang mewah dan minimalis, Mulia Village Juanda
        menjadi pilihan ideal untuk masa depan Anda. Tinggi plafon yang
        mengagumkan akan memperbaiki sirkulasi udara, memberikan kesegaran bagi
        rumah Anda. Dengan 2 carport yang luas, Anda tidak perlu khawatir lagi
        tentang tempat parkir untuk kendaraan pribadi Anda.
      </h3>
      <CardType />
    </div>
  );
};

export default TypeRumah;
