import React, { useEffect, useState } from "react";
import { IAnswerDTO } from "../Interfaces/Interfaces";

type DashAnswerProps = {
  getAnswerData: ({ AnswerId, AnswerText, RightAnswer }: IAnswerDTO) => void;
  answer: IAnswerDTO;
};
export default function DashAnswer({ getAnswerData, answer }: DashAnswerProps) {
  const [answerData, setAnswerData] = useState<IAnswerDTO>(answer);

  useEffect(() => {
    getAnswerData(answerData);
  }, [answer]);

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
        answerData.RightAnswer ? "shadow-greenHighlight/[0.4]" : ""
      } p-5 bg-${
        answerData.RightAnswer ? "greenHighlight" : "white"
      } text-center cursor-pointer hover:bg-${
        answerData.RightAnswer ? "greenHighlight" : "gray-100"
      } transition`}
      onClick={() => {
        setAnswerData({
          ...answerData,
          RightAnswer: answerData.RightAnswer === 1 ? 0 : 1,
        });
      }}
    >
      <input
        type="text"
        className={`
        bg-${
          answerData.RightAnswer ? "greenHighlight" : "white"
        } focus:outline-none text-${
          answerData.RightAnswer ? "white" : "primary"
        } text-md rounded-lg  w-80 p-2.5 group-hover:bg-${
          answerData.RightAnswer ? "greenHighlight" : "gray-100"
        } transition w-fit`}
        placeholder="Insira a resposta..."
        required
        value={answerData.AnswerText}
        onChange={(e) => {
          setAnswerData({ ...answerData, AnswerText: e.target.value });
        }}
      />
    </div>
  );
}
