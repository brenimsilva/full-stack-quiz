"use client";
import React, { useEffect, useState } from "react";
import { IQuestionDTO } from "../Interfaces/Interfaces";
import API from "../util/API";

type Props = {
  id: number;
};
export default function QuestionCard({ id }: Props) {
  const [question, setQuestion] = useState<IQuestionDTO>();

  useEffect(() => {
    API.getQuestionAnswerByQuestionId(id).then((data) => setQuestion(data));
  }, []);

  return (
    <div className="p-5 shadow-md w-60 h-60 bg-white rounded-xl border border-primary cursor-pointer transition hover:translate-y-[-2%]">
      {question && (
        <React.Fragment>
          <h1 className="mb-5 text-white font-semibold text-sm bg-primary p-2 shadow-md rounded-md">
            {question?.question}
          </h1>
          <div className="border p-2 bg-white">
            <ol className="list-decimal list-inside">
              {question.answers.map((answer) => {
                return (
                  <li className="text-textColor list-item">
                    {answer.answerText}
                  </li>
                );
              })}
            </ol>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
