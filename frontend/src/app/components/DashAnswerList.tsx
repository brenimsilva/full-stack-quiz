"use client";
import React, { useState } from "react";
import { IQuestionDTO, IAnswerDTO } from "../Interfaces/Interfaces";
import DashAnswer from "./DashAnswer";

const answerDefaultState: IAnswerDTO[] = [];
for (let i = 0; i < 4; i++) {
  answerDefaultState.push({ AnswerId: i, answerText: "", RightAnswer: 0 });
}
type Props = {
  getAnswers: (answers: Array<IAnswerDTO>) => void;
};
export default function DashAnswerList({ getAnswers }: Props) {
  const [form, setForm] = useState<IQuestionDTO>({} as IQuestionDTO);
  const [answers, setAnswers] = useState<IAnswerDTO[]>(answerDefaultState);

  function getAnswerText(i: number, text: string) {
    setAnswers((prev) => {
      prev[i].answerText = text;
      return [...prev];
    });
  }

  function getRightAnswer(i: number) {
    setAnswers((prev) => {
      prev.forEach((item) => {
        item.RightAnswer = 0;
      });
      prev[i].RightAnswer = 1;
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
          onClick={() => {
            getAnswers(answers);
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
