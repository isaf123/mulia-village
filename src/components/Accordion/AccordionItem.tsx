import * as React from "react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface IAccordionItemsProps {
  title: string;
  children: any;
}

const AccordionItem: React.FunctionComponent<IAccordionItemsProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen === true ? "bg-color1" : "bg-[#F7F7F7]"
      } px-[10px] md:px-[60px] py-[0px] md:py-[60px] rounded-[6px] md:rounded-[20px] ${
        isOpen === true ? "text-[#F7F7F7]" : " text-color1"
      } shadow-xl transition-all duration-1000`}
    >
      <div
        className="flex items-center justify-between px-4 md:px-0 p-0 md:p-4 cursor-pointer "
        onClick={toggleAccordion}
      >
        <div
          className={`font-bold ${
            isOpen === true ? "text-[12px]" : "text-[10px]"
          } ${
            isOpen === true ? "md:text-[50px]" : "md:text-[40px]"
          } py-[14px] px-[10px]`}
        >
          {title}
        </div>
        <div className="text-[10px] md:text-[40px] ">
          {isOpen ? (
            <MdKeyboardArrowRight className=" transform rotate-90" />
          ) : (
            <MdKeyboardArrowRight />
          )}
        </div>
      </div>
      {isOpen && <div className="px-[20px] pb-[14px]">{children}</div>}
    </div>
  );
};

export default AccordionItem;
