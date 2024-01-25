import QuestionRepository from "../repositories/question.repository";

export default class QuestionService {
  private questionRepository: QuestionRepository;
  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async getAll(): Promise<any> {
    const data = await this.questionRepository.getAll();
    return data;
  }
  async getOne(id: number) {
    return await this.questionRepository.getOne(id);
  }
  async create(data: any) {
    await this.questionRepository.create(data);
  }
}
