
interface IQuestionDTO {
  questionId: number;
  question: string;
  answers: Array<IAnswerDTO>;
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
  answerText: string;
  RightAnswer: number;
}

export type {IAnswer, IQuestion, IAnswerDTO, IQuestionDTO}
