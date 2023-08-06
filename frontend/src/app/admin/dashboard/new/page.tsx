"use client";
import { IAddQuestionDTO, IAnswerDTO } from "@/app/Interfaces/Interfaces";
import Container from "@/app/components/Container";
import DashAnswerList from "@/app/components/DashAnswerList";
import DataAnswerList from "@/app/components/DashAnswerList";
import QuestionCard from "@/app/components/QuestionCard";
import API from "@/app/util/API";
import React, { useEffect, useState } from "react";

export default function page() {
  const [question, setQuestion] = useState<IAddQuestionDTO>(
    {} as IAddQuestionDTO
  );
  function questionInput(value: string) {
    setQuestion((prev) => {
      return { ...prev, question: value };
    });
  }

  function getAnswersInput(answers: Array<IAnswerDTO>) {
    API.addQuestionWithAnswers({ ...question, Answers: answers }).then((data) =>
      console.log(data)
    );
  }

  return (
    <div className="w-full overflow-auto">
      <div className="w-full flex justify-center">
        <Container>
          <input
            type="text"
            className="bg-white border-gray-200 focus:outline-white text-gray-500 text-2xl rounded-lg  w-80 p-2.5"
            placeholder="Insira a pergunta..."
            onChange={({ target }) => {
              questionInput(target.value);
            }}
            required
          ></input>
        </Container>
      </div>
      <div className="w-full flex justify-center mt-10">
        <DashAnswerList getAnswers={getAnswersInput} />
      </div>
      <div className="gap-10 w-full grid grid-cols-4 mt-10">
        <QuestionCard id={5} />
        <QuestionCard id={5} />
        <QuestionCard id={5} />
        <QuestionCard id={5} />
        <QuestionCard id={5} />
        <QuestionCard id={5} />
        <QuestionCard id={5} />
        <QuestionCard id={5} />
      </div>
    </div>
  );
}
