"use client";
import React from "react";
import Wrapper from "../layout/Wrapper";
import { SkillType } from "../types/Type";
import TypographyH1 from "../shacdnCom/Heading";
import TypographyH2 from "../shacdnCom/Heading2";
import TypographyH4 from "../shacdnCom/Hading4";
import TypographyP from "../shacdnCom/Para";
import ProgressBar from "../shacdnCom/Progress";
function Progress() {
  const skill: SkillType[] = [
    {
      name: "HTML",
      range: 90,
    },
    {
      name: "CSS",
      range: 92,
    },
    {
      name: "Javascript",
      range: 85,
    },
    {
      name: "Typescript",
      range: 70,
    },
    {
      name: "Java",
      range: 65,
    },
    {
      name: "Php",
      range: 60,
    },
  ];
  return (
    <Wrapper>
      <div className="py-16 text-center">
        <TypographyH1 text="Core Design Skills" />
        <TypographyP
          text=" I excel in essential design skills, creating visually stunning and
          functional digital experiences. From UI design to UX research, my
          passion is to craft effective and memorable digital solutions."
          TailwindClass=" w-10/12 mx-auto py-5 md:w-8/12"
        />

        <div className="flex gap-7 justify-center text-left  w-3/4 sm:w-full md:w-11/12 lg:w-3/4 mx-auto flex-wrap  items-center">
          {skill.map((item, i) => (
            <div className=" basis-full mx-auto sm:basis-5/12 " key={i}>
              <p>{item.name}</p>
              <div className="flex items-center border-2 justify-center gap-x-2">
                {/* <div className="bg-slate-300 overflow-hidden	 h-3 rounded-md mt-2 w-11/12 justify-between items-center ">
                  <div
                    style={{ width: `${item.range}` }}
                    className="bg-black  h-3 text-white text-sm rounded-md"
                  ></div>{" "}
                </div> */}
                <ProgressBar width={item.range} />
                <span className="ml-2">{item.range}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Progress;
