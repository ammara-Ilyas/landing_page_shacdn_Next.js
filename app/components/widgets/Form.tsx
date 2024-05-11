import React from "react";
import InputDemo from "../shacdnCom/Input";
import TextareaDemo from "../shacdnCom/Textarea";
import { Button } from "@/components/ui/button";
function Form() {
  return (
    <div className=" w-[45%] flex flex-col gap-5">
      <InputDemo text="Name" />
      <InputDemo text="Email" />
      <InputDemo text="Phone Number" />
      <TextareaDemo />{" "}
      <Button variant="hire" size="lg" className="w-[40%]">
        Send Message
      </Button>
    </div>
  );
}

export default Form;
