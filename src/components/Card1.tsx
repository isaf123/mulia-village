import * as React from "react";

interface ICard1Props {
  children: any;
  title: string;
  number: string;
  date: string;
}

const Card1: React.FunctionComponent<ICard1Props> = (props) => {
  return (
    <div className="h-[504px] w-1/3 rounded-xl shadow-lg flex flex-col text-center text-3xl">
      <div className="flex justify-center my-10 ">{props.children}</div>
      <h1 className="font-bold mx-10">{props.title}</h1>
      <h1 className="mt-[6rem] mx-10">{props.number}</h1>
      <h1>{props.date}</h1>
    </div>
  );
};

export default Card1;
