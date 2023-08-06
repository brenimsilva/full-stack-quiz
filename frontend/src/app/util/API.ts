import {IAnswer, IQuestion, IQuestionDTO } from "../Interfaces/Interfaces";

export default class API {
    static baseUrl:string = "https://localhost:7064/";
    static resource: string = "Question";
    static url: string = `${this.baseUrl}${this.resource}`;
    constructor(){}
    public static async getQuestionAnswerByQuestionId(id: number): Promise<IQuestionDTO> {
        const url = `${this.baseUrl}${this.resource}/GetQuestionAnswersByQuestionId/${id}`
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    public static async addQuestionWithAnswers(question: IQuestionDTO): Promise<IQuestionDTO> {
        const url = `${this.url}/AddQuestionWithAnswers`;
        const json = JSON.stringify(question);
        const res = await fetch(url, {method: "POST", body: json,
        headers: {"Content-Type": "application/json"}});
        const data = await res.json();
        return data;
    }

    public static async getAllQuestions() {
    }
}
