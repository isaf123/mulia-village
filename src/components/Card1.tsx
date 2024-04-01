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
      className={`relative transition duration-500 h-[210px] md:h-[504px] rounded-xl shadow-lg flex flex-col text-center text-3xl ${
        onHover ? "bg-color1 text-white" : ""
      }`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex justify-center pt-4">
        <span
          className={`flex justify-center mb-4 md:my-10 rounded-full border-2 ${
            onHover ? "border-color2 text-color2" : "border-black text-black"
          } h-[40px] w-[40px] md:h-[4rem] md:w-[4rem] items-center text-base md:text-3xl`}
        >
          {props.children}
        </span>
      </div>
      <h1 className="font-bold md:mx-8 text-xs mb-4 md:my-0 md:text-3xl tracking-tight md:tracking-normal">
        {props.title}
      </h1>

      <div className="md:absolute md:bottom-16 static text-center w-full text-xs md:text-3xl tracking-tight md:tracking-normal ">
        <h1 className="mx-auto">{props.number}</h1>
        <h1 className="mx-auto">{props.date}</h1>
      </div>
    </div>
  );
};

export default Card1;
