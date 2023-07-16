
interface IQuestion {
  questionId: number;
  question: string;
  answers: Array<IAnswer>;
}

interface IAnswer {
  answerId: number;
  answerText: string;
  rightAnswer: number;
}