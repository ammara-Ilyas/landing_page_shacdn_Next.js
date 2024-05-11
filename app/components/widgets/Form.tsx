import React from "react";
import InputDemo from "../shacdnCom/Input";
import TextareaDemo from "../shacdnCom/Textarea";
function Form() {
  return (
    <div className="border-2 w-[45%] flex flex-col gap-5">
      <InputDemo text="Name" />
      <InputDemo text="Email" />
      <InputDemo text="Phone Number" />
      <TextareaDemo />
    </div>
  );
}

export default Form;
