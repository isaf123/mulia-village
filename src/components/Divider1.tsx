import * as React from "react";

interface IDivider1Props {
  children: string;
}

const Divider1: React.FunctionComponent<IDivider1Props> = (props) => {
  return (
    <div className="w-full flex h-fit items-center">



      <p className="font-poppin text-[20px] md:text-[70px] text-color2 font-bold bg-color1 w-full flex-1 flex justify-end pr-2 h-[60px] md:h-[126px] items-center">
        {props.children.split(" ")[0]}
      </p>
      <div className=" flex-1 pl-2 relative h-[60px] md:h-[126px]">
        <div className="font-playfair text-[20px] md:text-[80px] text-color1 italic h-full flex items-center">
          <div className=" h-fit">{props.children.split(" ")[1]}</div>
        </div>
        <div className="bottom-0 right-0 w-[157px] md:w-[789px] border-color1 border-b-[2px] md:border-b-[6px] ml-10 md:ml-32 absolute"></div>


      </div>
    </div>
  );
};

export default Divider1;
