import * as React from "react";
import { useState } from "react";

interface ICard1Props {
  children: any;
  title: string;
  number: string;
  date: string;
}

const Card1: React.FunctionComponent<ICard1Props> = (props) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div
      className={`relative transition duration-500 h-[504px] w-1/3 rounded-xl shadow-lg flex flex-col text-center text-3xl ${
        onHover ? "bg-color1 text-white" : ""
      }`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex justify-center">
        <span
          className={`flex justify-center my-10 rounded-full border-2 ${
            onHover ? "border-color2 text-color2" : "border-black text-black"
          } h-[4rem] w-[4rem] items-center`}
        >
          {props.children}
        </span>
      </div>
      <h1 className="font-bold mx-8">{props.title}</h1>
      <div className="absolute bottom-16 text-center w-full">
        <h1 className="mx-auto">{props.number}</h1>
        <h1 className="mx-auto">{props.date}</h1>
      </div>
    </div>
  );
};

export default Card1;
