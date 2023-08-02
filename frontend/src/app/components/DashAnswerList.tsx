import React, { useState } from "react";
import { IAddQuestionDTO, IAnswerDTO } from "../Interfaces/Interfaces";
import DashAnswer from "./DashAnswer";

const answerDefaultState: IAnswerDTO[] = [];
for (let i = 0; i < 4; i++) {
  answerDefaultState.push({ AnswerId: i, AnswerText: "", RightAnswer: 0 });
}
export default function DashAnswerList() {
  const [form, setForm] = useState<IAddQuestionDTO>({} as IAddQuestionDTO);
  const [answers, setAnswers] = useState<IAnswerDTO[]>(answerDefaultState);

  function getAnswerText(i: number, text: string) {
    setAnswers((prev) => {
      prev[i].AnswerText = text;
      return [...prev];
    });
  }

  function getRightAnswer(i: number) {
    setAnswers((prev) => {
      prev.forEach((item) => {
        item.RightAnswer = 0;
      });
      prev[i].RightAnswer = 1;
      console.log(prev);
      return [...prev];
    });
  }

  return (
    <div className="grid grid-cols-2 gap-5 w-4/6">
      {answers.map((answer, index) => {
        return (
          <DashAnswer
            getAnswerText={(text) => getAnswerText(index, text)}
            getRightAnswer={() => getRightAnswer(index)}
            key={`${answer.AnswerId}-${index}`}
            answer={answer}
          />
        );
      })}
      <div className="col-span-2 flex justify-center">
        <button
          className="rounded-xl p-2 w-60 mt-5 bg-primary text-gray-100 shadow-xl shadow-secondary hover:bg-primary/[0.8] transition"
          onClick={() => {}}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
