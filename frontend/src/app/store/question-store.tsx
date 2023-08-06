"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { IQuestionDTO } from "../Interfaces/Interfaces";
import API from "../util/API";

export type QuestionContext = {
  questions: Array<IQuestionDTO>;
  add: (question: IQuestionDTO) => void;
};

export const questionContext = createContext({} as QuestionContext);
type Props = {
  children: ReactNode;
};

export default function QuestionProvider({ children }: Props) {
  const [questions, setQuestions] = useState<Array<IQuestionDTO>>([]);

  function add(question: IQuestionDTO) {
    API.addQuestionWithAnswers(question).then((res) => {
      setQuestions((prev) => {
        return [...prev, res];
      });
    });
  }
  useEffect(() => {}, []);
  return (
    <questionContext.Provider value={{ add, questions }}>
      {children}
    </questionContext.Provider>
  );
}
