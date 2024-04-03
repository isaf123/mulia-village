import * as React from "react";

interface IInputanProps {}

const Inputan: React.FunctionComponent<IInputanProps> = (props) => {
  return (
    <section>
      <form action="">
        <input className=" w-[650px] h-[80px]" type="text" />
      </form>
    </section>
  );
};

export default Inputan;
