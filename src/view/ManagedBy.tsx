import * as React from "react";

interface IManagedByProps {}

const ManagedBy: React.FunctionComponent<IManagedByProps> = (props) => {
  return (
    <div className="w-full h-fit md:h-[942px] bg-[#E9E9E9] pb-[25px] ">
      <div className=" ">
        <h1 className="text-[20px] md:text-[70px] flex ml-[100px] md:ml-[650px] items-center text-color2 ">
          <span className="font-semibold">Amanah </span>
          <span className=" font-playfair italic text-color1 pl-4">
            {" "}
            memiliki
          </span>{" "}
          <div className=" ml-[10px] md:ml-[20px] w-[1600px] h-[1px] md:h-[6px] bg-color1 "></div>
        </h1>
      </div>
      <div>
        <h1 className="mr-[100px] md:mr-[650px] text-[20px] md:text-[70px] flex items-center   text-color1 ">
          <div className=" mr-[10px] md:mr-[20px] w-[1600px] h-[1px] md:h-[6px] bg-color1 "></div>
          <span className="font-playfair italic">Jaringan </span>
          <span className=" text-[20px] md:text-[70px]  text-color2 font-semibold pl-4">
            Kerjasama
          </span>
        </h1>
      </div>
      <p className="mt-[25px] md:mt-[140px] px-[30px] md:px-[288px] text-[10px] md:text-[30px] text-color1 flex justify-center items-center text-center ">
        Kami menjunjung tinggi kejujuran sehingga jangan khawatir dengan Mulia
        Village Juanda. Hunian kami dibangun oleh developer yang juga amanah dan
        terpercaya yaitu Fariza Land. Kami juga dipercaya oleh beberapa yayasan
        muslim seperti yayasan Nurul Hayat dan menjadi anggota dari beberapa
        organisasi real estate.
      </p>
      <div className="mt-[23px] md:mt-[35px] flex text-[6px] md:text-[30px] text-black mx-[0px] ml-[52.5px] md:mx-[212px] w-fit md:w-[1495px] h-[54px] md:h-[295px]   ">
        <p className=" flex items-center mr-[10px] md:mr-[0px] font-semibold ">
          {" "}
          Managed By:
        </p>
        <img src="aef 1.png" alt="" className="" />
      </div>
    </div>
  );
};

export default ManagedBy;
