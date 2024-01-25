import Question from "../models/question.model";

export default class QuestionRepository {
  async getAll(): Promise<any> {
    return await Question.findAll();
  }
  async getOne(id: number): Promise<any> {
    return await Question.findAll({ where: { id } });
  }
  async create(data: any) {
    return await Question.create(data);
  }
}
