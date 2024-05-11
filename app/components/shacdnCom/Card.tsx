import React from "react";
import Image from "next/image";
import TypographyH4 from "./Hading4";
import { StaticImageData } from "next/image";
import TypographyP from "./Para";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface CardType {
  data: {
    img: StaticImageData;
    heading: string;
    des: string;
    icon: JSX.Element;
  }[];
}
const CardDem: React.FC<CardType> = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <Card key={i} className="">
          <CardHeader className=" flex justify-center items-center">
            <Image src={item.img} alt="img" className="" />
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyH4 text={item.heading}></TypographyH4>
          </CardContent>
          <CardFooter className="flex justify-between items-center px-5 ">
            <TypographyP text={item.des}></TypographyP>
            {item.icon && (
              <span className=" rounded-full bg-red-600 p-2 text-xl text-white">
                {item.icon}
              </span>
            )}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardDem;
