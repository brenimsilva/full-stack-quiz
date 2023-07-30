import React, { useState } from "react";
import { IAddQuestionDTO, IAnswerDTO } from "../Interfaces/Interfaces";
import DashAnswer from "./DashAnswer";

export default function DataAnswerList() {
  const [form, setForm] = useState<IAddQuestionDTO>({} as IAddQuestionDTO);
  const [answers, setAnswers] = useState<IAnswerDTO[]>([] as IAnswerDTO[]);

  function getAnswer(answer: string, selected: boolean) {
    setAnswers((prev) => {
      return;
    });
  }
  return (
    <div className="grid grid-cols-2 gap-5 w-4/6">
      {answers.map((answer, index) => {
        return (
          <DashAnswer
            getAnswerData={getAnswer}
            key={`${answer.AnswerText}-${index}`}
          />
        );
      })}
    </div>
  );
}
