import React from "react";
interface HeadingType {
  text: string;
  TailwindClass?: string;
}
const TypographyH1: React.FC<HeadingType> = ({ text, TailwindClass = "" }) => {
  return (
    <h1 className={`${TailwindClass} scroll-m-20  font-bold tracking-tight `}>
      {text}
    </h1>
  );
};

export default TypographyH1;
