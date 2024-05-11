import React from "react";
import Image from "next/image";
import background from "@/images/assets/portfolio/Background.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import profile from "@/images/assets/portfolio/testimonial.png";
import Wrapper from "../layout/Wrapper";
import CarouselDemo from "../shacdnCom/Testimonialsh";
import TypographyH1 from "../shacdnCom/Heading";
import TypographyP from "../shacdnCom/Para";
function Testimonial() {
  const data = {
    paragraph:
      "Sara Jones's designs are both visually captivating and highlyeffective. She transformed our website, enhancing user engagement an conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
    img: profile,
    name: "John Smith /",
    position: "CEO of XYZ Company",
  };
  return (
    // <Wrapper>
    <div className="flex justify-center items-center gap-8 bg-red-300 p-10 flex-col relative ">
      <Image
        src={background}
        alt="red circle"
        className="absolute top-0 left-1/2"
      />
      <TypographyH1 text="Testimonials" />
      <h1 className="text-4xl font-bold z-0 pt-10 ">Testimonials</h1>
      <div className="grid grid-cols-12 place-items-center">
        <MdArrowBackIos className="text-3xl col-span-1 text-gray-800 lg:col-start-2" />
        <TypographyP
          text=" Sara Jones's designs are both visually captivating and highly
          effective. She transformed our website, enhancing user engagement and
          conversions. Her attention to detail and creative approach are
          top-notch. Highly recommended!"
          TailwindClass="col-start-3 col-end-11 text-center text-xl font-light lg:col-start-4 lg:col-end-10"
        />
        <MdArrowForwardIos className="text-3xl col-start-12 lg:col-start-11  text-gray-800" />
      </div>
      <div>
        <figcaption className="flex items-center justify-center ">
          <Image
            className="rounded-full w-16 h-16"
            src={profile}
            alt="profile picture"
          />
          <div className=" font-medium dark:text-white  rtl:text-right ms-3">
            <h4 className="font-bold">
              John Smith /{" "}
              <span className="font-normal">CEO of XYZ Company</span>
            </h4>
          </div>
        </figcaption>
      </div>
      <CarouselDemo data={data} />
    </div>
  );
}

export default Testimonial;
