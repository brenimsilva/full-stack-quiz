import React, { useState } from "react";
import { IAnswerDTO } from "../Interfaces/Interfaces";

export default function AnswerButton({
  answerText,
  AnswerId,
  RightAnswer,
}: IAnswerDTO) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const colors = ["bg-white", "bg-red-700", "bg-green-700"];

  function checkResult() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <div
        onClick={checkResult}
        className={`group ${
          isClicked && RightAnswer === 1 ? colors[2] : ""
        } border rounded p-5 cursor-pointer hover:bg-white flex justify-center align-center transition`}
      >
        <button className="text-white group-hover:text-black transition">
          {answerText}
        </button>
      </div>
    </div>
  );
}
