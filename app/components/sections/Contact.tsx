import React from "react";
import Link from "next/link";
import Wrapper from "@/app/components/layout/Wrapper";
import { address } from "../types/ContactData";
import { contactIcons } from "../types/ContactData";
///////import shacdn components
import TypographyH1 from "../shacdnCom/Heading";
import TypographyP from "../shacdnCom/Para";
import { Button } from "@/components/ui/button";
import Form from "../widgets/Form";
function Contact() {
  return (
    <Wrapper>
      <div className="relative text-center  bg-red-300 py-16">
        <div className="rounded-full bg-red-500 absolute top-2/4 -left-14 w-28 h-28  z-0"></div>
        <div className="flex gap-10  flex-col md:flex-row justify-center w-11/12  ml-3 ">
          <div className=" w-10/12 md:w-2/5 flex flex-col gap-4 text-left z-0">
            <div>
              <TypographyH1 text="Get in Touch" />
              <TypographyP
                text=" Have a question or a project in mind? I'd love to hear from you.
                Let's chat and make something amazing together."
              />
            </div>
            <ul className="flex  flex-col ">
              {address.map((item, i) => (
                <li
                  key={i}
                  className="flex text-xl items-center text-left py-2"
                >
                  <div>
                    <Button variant="link" size="icon">
                      {item.icon}
                    </Button>
                  </div>
                  <TypographyP text={item.link} TailwindClass="pl-4" />
                </li>
              ))}
            </ul>
            <ul className="flex  w-1/3 justify-between  items-center text-base mt-3 ">
              {contactIcons &&
                contactIcons.map((item, i) => (
                  <li key={i} className=" bg-slate-100  rounded-full">
                    <Link href={item.link} target="_blank" className="">
                      {/* {item.icon} */}
                      <Button variant="link" size="sm">
                        {item.icon}
                      </Button>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* <div className="border-2 w-[45%]"> */}
          <Form />
          {/* </div> */}
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
