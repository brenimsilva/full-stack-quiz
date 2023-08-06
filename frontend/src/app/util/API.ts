import { IAddQuestionDTO, IQuestionDTO } from "../Interfaces/Interfaces";

export default class API {
    static baseUrl:string = "https://localhost:7064/";
    static resource: string = "Question";
    constructor(){}
    public static async getQuestionAnswerByQuestionId(id: number): Promise<IQuestionDTO> {
        const url = `${this.baseUrl}${this.resource}/GetQuestionAnswersByQuestionId/${id}`
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    public static async addQuestionWithAnswers({question}: IAddQuestionDTO): Promise<boolean> {
        const url = `${this.baseUrl}${this.resource}/AddQuestionWithAnswers`;
        const res = await fetch(url, {method: "POST", body: JSON.stringify(question),
        headers: {"Content-Type": "application/json"}});
        const data = await res.json();
        return data;
    }
}
