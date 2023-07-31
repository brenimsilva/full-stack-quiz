import React, { useState } from "react";
import { IAddQuestionDTO, IAnswerDTO } from "../Interfaces/Interfaces";
import DashAnswer from "./DashAnswer";

const answerDefaultState: IAnswerDTO[] = [];
for (let i = 0; i < 4; i++) {
  answerDefaultState.push({ AnswerId: 0, AnswerText: "", RightAnswer: 0 });
}
export default function DashAnswerList() {
  const [form, setForm] = useState<IAddQuestionDTO>({} as IAddQuestionDTO);
  const [answers, setAnswers] = useState<IAnswerDTO[]>(
    answerDefaultState as IAnswerDTO[]
  );

  function getAnswers(i: number, obj: IAnswerDTO) {
    setAnswers((prev) => {
      prev.forEach((item) => {
        item.RightAnswer = 0;
      });
      prev[i] = obj;
      // console.log(prev);
      return prev;
    });
  }
  return (
    <div className="grid grid-cols-2 gap-5 w-4/6">
      {answers.map((answer, index) => {
        return (
          <DashAnswer
            getAnswerData={(a) => getAnswers(index, a)}
            key={`${answer.AnswerText}-${index}`}
            answer={answer}
          />
        );
      })}
    </div>
  );
}
