"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IQuestionDTO } from "./Interfaces/Interfaces";
import AnswerList from "./components/AnswerList";
import API from "./util/API";

export default function Home() {
  const [question, setQuestion] = useState<IQuestionDTO>({} as IQuestionDTO);

  useEffect(() => {
    API.getQuestionAnswerByQuestionId(5).then((data) => setQuestion(data));
  }, []);
  return (
    <main className="flex min-h-screen bg-gray-900 items-center justify-center ">
      <div className="bg-gray-800 w-screen h-96">
        <div>
          <h1 className="text-white text-3xl p-10 text-center font-normal">
            {question.question && question.question}
          </h1>
        </div>
        <div className="flex justify-center">
          {question.answers && <AnswerList answerList={question.answers} />}
        </div>
      </div>
    </main>
  );
}
