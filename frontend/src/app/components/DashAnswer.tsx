import React, { RefObject, createRef, useEffect, useState } from "react";
import { IAnswerDTO } from "../Interfaces/Interfaces";

type DashAnswerProps = {
  getAnswerText: (text: string) => void;
  getRightAnswer: () => void;
  answer: IAnswerDTO;
};
export default function DashAnswer({
  getAnswerText,
  getRightAnswer,
  answer,
}: DashAnswerProps) {
  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-greenHighlight",
    "text-blueHighLight",
    "text-primary",
    "bg-secondary/[0.4]",
    "shadow-greenHighlight/[0.4]",
  ];
  return (
    <div
      className={`
      group
      flex
      justify-center
      rounded shadow-md ${
        answer.RightAnswer === 1 ? "shadow-greenHighlight/[0.4]" : ""
      } p-5 bg-${
        answer.RightAnswer ? "greenHighlight" : "white"
      } text-center cursor-pointer hover:bg-${
        answer.RightAnswer ? "greenHighlight" : "gray-100"
      } transition`}
      onClick={() => {
        getRightAnswer();
      }}
    >
      <input
        type="text"
        className={`
        bg-${
          answer.RightAnswer ? "greenHighlight" : "white"
        } focus:outline-none text-${
          answer.RightAnswer ? "white" : "primary"
        } text-md rounded-lg  w-80 p-2.5 group-hover:bg-${
          answer.RightAnswer ? "greenHighlight" : "gray-100"
        } transition w-fit`}
        placeholder="Insira a resposta..."
        required
        value={answer.AnswerText}
        onChange={(e) => {
          getAnswerText(e.target.value);
        }}
      />
    </div>
  );
}
