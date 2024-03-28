import * as React from "react";

interface IDivider1Props {
  children: string;
}

const Divider1: React.FunctionComponent<IDivider1Props> = (props) => {
  return (
    <div className="w-full flex h-fit items-center">
      <p className="font-poppin text-[70px] text-color2 font-bold bg-color1 w-full flex-1 flex justify-end pr-2 h-[126px] items-center">
        {props.children.split(" ")[0]}
      </p>
      <div className=" flex-1 pl-2">
        <p className="font-playfair text-[80px] text-color1 italic">
          {props.children.split(" ")[1]}
        </p>
        <div className=" border-color1 border-b-[6px] ml-32"></div>
      </div>
    </div>
  );
};

export default Divider1;
