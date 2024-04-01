import * as React from "react";

interface IReadMoreButtonProps {}

const ReadMoreButton: React.FunctionComponent<IReadMoreButtonProps> = (
  props
) => {
  return (
    <button className="text-[10px] md:text-[30px] border-[0.6px] md:border-[2px] border-color1 text-color1 font-bold rounded-[6px] md:rounded-[20px] p-[6px] md:py-[20px] md:px-[20px] hover:bg-color1 hover:text-[#E9E9E9] transition duration-180 ease-in">
      <div className="md:w-[215px]">
        Read <span className="font-playfair italic font-normal">More</span>
      </div>
    </button>
  );
};

export default ReadMoreButton;
