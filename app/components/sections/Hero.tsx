import React from "react";
import Image from "next/image";
import heroImg from "@/images/assets/portfolio/poster.png";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <section className="flex flex-wrap flex-col sm:flex-row  w-full h-full justify-center items-center bg-rose-200 gap-3 pt-7 ">
      <div className="  font-serif w-3/4  h-[50vh] flex justify-evenly gap-7 sm:gap-2 sm:w-5/12  md:w-2/5 lg:w-1/3 flex-col ">
        <p className=" font-serif">UX Designer</p>
        <div className="text-3xl font-bold ">
          <h1 className="text-black mb-2">Hi There, I'm</h1>
          <h1 className="text-red-500">Ammara Ilyas</h1>
        </div>
        <p className=" w-11/12 md:w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse,
          maiores sed iure impedit numquam?
        </p>
        <div className="flex items-center pb-6 w-4/5 justify-between mt- sm:w-full md:w-10/12 lg:w-4/5 xl:w-3/4">
          <Button variant="hire" size="lg">
            Hire me
          </Button>
          <Button variant="port" size="lg">
            Portfolio
          </Button>
        </div>
      </div>
      <div className="   sm:block w-2/3 sm:w-5/12 h-full lg:w-1/3 ">
        <Image src={heroImg} alt="hero section" className="h-[55vh]" />
      </div>
    </section>
  );
}

export default Hero;
