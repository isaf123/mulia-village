import React from "react";
import AccordionItem from "./AccordionItem";

// Tipe generic untuk prop children
interface IAccordionProps {
  children: React.ReactNode;
}

// Komponen Accordion
const Accordion: React.FunctionComponent<IAccordionProps> & {
  Item: typeof AccordionItem;
} = ({ children }) => {
  return (
    <div className="w-[358px] md:w-[1504px] bg-white">
      <div className="space-y-[10px] md:space-y-[50px] bg-[#E9E9E9]">
        {children}
      </div>
    </div>
  );
};

// Menetapkan prop Item ke komponen Accordion
Accordion.Item = AccordionItem;

export default Accordion;
