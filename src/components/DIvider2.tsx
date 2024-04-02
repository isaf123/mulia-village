import * as React from "react";

interface IDivider2Props {
  children: string;
}

const Divider2: React.FunctionComponent<IDivider2Props> = (props) => {
  return (
    <div className="w-full flex h-fit items-center">

      <div className=" flex-1  relative">
        <div className="flex justify-end items-center h-[60px] md:h-[126px]">
          <p className="font-playfair text-[20px] md:text-[80px] text-color1 italic pr-3">
            {props.children.split(" ")[0]}
          </p>
        </div>
        <div className="bottom-0 border border-color1 border-b-[2px] w-[157px] md:w-[824px] md:border-b-[6px] mr-10 md:mr-32 absolute"></div>
      </div>

      <p className="font-poppin text-[20px] md:text-[70px] text-color2 font-bold bg-color1 w-full flex-1 flex pl-3 h-[60px] md:h-[126px] items-center">

        {props.children.split(" ")[1]}
      </p>
    </div>
  );
};

export default Divider2;
