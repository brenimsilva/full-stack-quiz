import React, { RefObject, createRef, useEffect, useState } from "react";
import { IAnswerDTO } from "../Interfaces/Interfaces";

type DashAnswerProps = {
  getAnswerText: (text: string) => void;
  getRightAnswer: () => void;
  answer: IAnswerDTO;
};
type Colors = {
  bgColor: string;
  shadowColor: string;
  hoverBgColor: string;
  textColor: string;
};
export default function DashAnswer({
  getAnswerText,
  getRightAnswer,
  answer,
}: DashAnswerProps) {
  const [colors, setColors] = useState<Colors>({} as Colors);
  const validColors = [
    "bg-primary",
    "bg-primary/[0.8]",
    "bg-primary/[0.5]",
    "bg-primary/[0.2]",
    "bg-secondary",
    "bg-greenHighlight",
    "text-blueHighLight",
    "text-primary",
    "bg-secondary/[0.4]",
    "shadow-greenHighlight/[0.4]",
    "shadow-primary/[0.5]",
    "bg-gray-100",
  ];

  useEffect(() => {
    answer.RightAnswer === 1
      ? setColors({
          bgColor: "primary/[0.5]",
          hoverBgColor: "primary/[0.2]",
          shadowColor: "shadow-primary/[0.5]",
          textColor: "white",
        })
      : setColors({
          bgColor: "white",
          hoverBgColor: "gray-100",
          shadowColor: "",
          textColor: "primary",
        });
  }, [answer.RightAnswer]);
  return (
    <div
      className={`group flex
      justify-center
      rounded shadow-md ${colors.shadowColor} border-2 border-secondary p-5 bg-${colors.bgColor} text-center cursor-pointer hover:bg-${colors.hoverBgColor} transition`}
      onClick={() => {
        getRightAnswer();
      }}
    >
      <input
        type="text"
        className={`
        bg-${colors.bgColor} focus:outline-none focu text-${colors.textColor} text-md rounded-lg w-80 p-2.5 group-hover:bg-${colors.hoverBgColor} transition w-fit`}
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
