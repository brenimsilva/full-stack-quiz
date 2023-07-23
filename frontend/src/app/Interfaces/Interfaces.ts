
interface IQuestionDTO {
  questionId: number;
  question: string;
  answers: Array<IAnswerDTO>;
}
interface IAddQuestionDTO {
  question: string;
  Answers: Array<IAnswerDTO>;
}

interface IQuestion {
  Id: number;
  QuestionText: string;
  created_at: Date;
  updated_at: Date;
}

interface IAnswer {
  Id: number;
  AnswerText: string;
  RightAnswer: number;
  QuestionId: number;
  created_at: Date;
  updated_at: Date;
}

interface IAnswerDTO {
  AnswerId: number;
  AnswerText: string;
  RightAnswer: number;
}

export type {IAnswer, IQuestion, IAnswerDTO, IQuestionDTO, IAddQuestionDTO}
