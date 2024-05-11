import React from "react";
import Image from "next/image";
import design from "@/images/assets/Images/Vectors.svg";
import brand from "@/images/assets/Images/branding.png";
import UX from "@/images/assets/Images/UX.png";
import usability from "@/images/assets/Images/usability.png";
import Wrapper from "../layout/Wrapper";
import { SerPortType } from "../types/Type";
import TypographyP from "../shacdnCom/Para";
import TypographyH1 from "../shacdnCom/Heading";
import TypographyH4 from "../shacdnCom/Hading4";
import CardDem from "../shacdnCom/Card";
function Services() {
  const servicesData: SerPortType[] = [
    {
      img: design,
      heading: "Design",
      des: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences",
    },
    {
      img: brand,
      heading: "Branding",
      des: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
    },
    {
      img: UX,
      heading: "UX Research",
      des: "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
    },
    {
      img: usability,
      heading: "Usability Testing",
      des: "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
    },
  ];
  return (
    <Wrapper>
      <div className=" flex flex-col justify-evenly items-center text-center py-10  mx-auto">
        <TypographyH1 text="Services" TailwindClass="" />
        <TypographyP
          text="Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together."
          TailwindClass="py-5 w-10/12 mx-auto md:w-8/12"
        />

        <div className="flex  lg:gap-3 justify-between items-center  w-5/6 lg:11/12 sm:w-11/12 ">
          {/* {servicesData.map((item, i) => (
            <div
              key={i}
              className="  flex gap-4 flex-col basis-4/5 lg:basis-56  justify-center items-center "
            >
              <Image src={item.img} alt="work" />
              <div className="">
                <TypographyH4 text={item.heading} />
                <TypographyP
                  text={item.des}
                  TailwindClass="pt-3 w-10/12 mx-auto "
                />
              </div>
            </div>
          ))}
           */}
          <CardDem data={servicesData} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
