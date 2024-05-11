import * as React from "react";
import TypographyP from "./Para";
import TypographyH4 from "./Hading4";
import type { StaticImageData } from "next/image";
import AvatarImg from "./Avatar";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface CourselType {
  data: {
    paragraph: string;
    img: StaticImageData;
    name: string;
    position: string;
  };
}

const CarouselDemo: React.FC<CourselType> = ({ data }) => {
  console.log(data);

  return (
    <Carousel className="w-3/4  mt-0 pt-0 ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="  text-center ">
              <Card>
                <CardContent className="flex flex-col aspect-square   items-center justify-center  w-full h-80">
                  <TypographyP
                    text={data.paragraph}
                    TailwindClass="w-[75%] text-xl"
                  />
                  <div className="flex items-center mt-5 justify-center">
                    <AvatarImg img={data.img} />
                    <TypographyP
                      text={data.name}
                      TailwindClass=" pl-4 font-bold"
                    />
                    <TypographyP text={data.position} TailwindClass="" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselDemo;
