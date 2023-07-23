import React, { createRef, useRef, useState } from "react";
import { IAnswerDTO } from "../Interfaces/Interfaces";

type InputProps = {
  label: string;
  getter: ({ AnswerId, AnswerText, RightAnswer }: IAnswerDTO) => void;
  placeholder?: string;
};
export default function Input({ label, getter, placeholder }: InputProps) {
  const radioRef = createRef<HTMLInputElement>();
  return (
    <div className="flex w-full align-center">
      <label className="">
        {label}
        <input
          type="text"
          className="border-2 rounded-md"
          placeholder={placeholder}
          onChange={(e) =>
            getter({
              AnswerText: e.target.value,
              RightAnswer: radioRef.current!.checked ? 1 : 0,
              AnswerId: 0,
            })
          }
        />
      </label>
      <div className="shadow">
        <input type="radio" name="answer" ref={radioRef} />
      </div>
    </div>
  );
}
