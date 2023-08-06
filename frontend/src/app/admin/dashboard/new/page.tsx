"use client";
import {
  IAddQuestionDTO,
  IAnswerDTO,
  IQuestionDTO,
} from "@/app/Interfaces/Interfaces";
import Container from "@/app/components/Container";
import DashAnswerList from "@/app/components/DashAnswerList";
import DataAnswerList from "@/app/components/DashAnswerList";
import React, { useEffect, useState } from "react";

type Answers = {
  answer1: IAnswerDTO;
  answer2: IAnswerDTO;
  answer3: IAnswerDTO;
  answer4: IAnswerDTO;
};
export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <Container>
          <input
            type="text"
            className="bg-white  border-gray-200 focus:outline-white text-gray-900 text-2xl rounded-lg  w-80 p-2.5"
            placeholder="Insira a pergunta..."
            required
          ></input>
        </Container>
      </div>
      <div className="w-full flex justify-center mt-10">
        <DashAnswerList />
      </div>
    </div>
  );
}
