import React from "react";
import { IAnswerDTO } from "../Interfaces/Interfaces";
import AnswerButton from "./AnswerButton";

interface IProps {
  answerList: Array<IAnswerDTO>;
}
export default function AnswerList({ answerList }: IProps) {
  return (
    <div className="h-40 grid grid-cols-2 mt-16 gap-6 w-5/6">
      {answerList.map((answer) => {
        return (
          <AnswerButton
            key={`${answer.answerText}_${answer.answerId}_${answer.rightAnswer}`}
            answerId={answer.answerId}
            answerText={answer.answerText}
            rightAnswer={answer.rightAnswer}
          />
        );
      })}
    </div>
  );
}
