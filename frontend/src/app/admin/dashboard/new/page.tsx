"use client";
import {
  IAddQuestionDTO,
  IAnswerDTO,
  IQuestionDTO,
} from "@/app/Interfaces/Interfaces";
import Input from "@/app/components/Input";
import React, { useEffect, useState } from "react";

type Answers = {
  answer1: IAnswerDTO;
  answer2: IAnswerDTO;
  answer3: IAnswerDTO;
  answer4: IAnswerDTO;
};
export default function page() {
  const [form, setForm] = useState<IAddQuestionDTO>({} as IAddQuestionDTO);
  const [answers, setAnswers] = useState<Answers>({} as Answers);

  useEffect(() => {
    setForm((prev) => {
      return {
        ...prev,
        answers: [
          { ...answers.answer1 },
          { ...answers.answer2 },
          { ...answers.answer3 },
          { ...answers.answer4 },
        ],
      };
    });
  }, [answers]);
  return (
    <div>
      <div>
        <label>
          Pergunta
          <input
            type="text"
            placeholder="Digite sua pergunta"
            className="border shadow transition"
            onChange={(e) => {
              setForm((prev) => {
                return { ...prev, question: e.target.value };
              });
            }}
          />
        </label>
      </div>
      <Input
        getter={(answer) => {
          console.log(answer);
          setAnswers((prev) => {
            return { ...prev, answer1: answer };
          });
        }}
        label="Resposta 01"
        placeholder="Digite sua Resposta..."
      />

      <Input
        label="Resposta 02"
        getter={(answer) => {
          setAnswers((prev) => {
            return { ...prev, answer2: answer };
          });
        }}
        placeholder="Digite sua Resposta..."
      />

      <Input
        getter={(answer) => {
          setAnswers((prev) => {
            return { ...prev, answer3: answer };
          });
        }}
        label="Resposta 03"
        placeholder="Digite sua Resposta..."
      />

      <Input
        getter={(answer) => {
          setAnswers((prev) => {
            return { ...prev, answer4: answer };
          });
        }}
        label="Resposta 03"
        placeholder="Digite sua Resposta..."
      />

      <button
        onClick={async () => {
          console.log(form);
          const res = await fetch(
            "https://localhost:44368/Question/AddQuestionWithAnswers",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(form),
            }
          );
          const data = await res.json();
          return data;
        }}
        className="transition shadow p-2 rounded-2 mt-5 bg-gray-200/[0.5] hover:bg-sky-300/[0.5]"
      >
        Criar Pergunta
      </button>
    </div>
  );
}
