import CategoryRepository from "../repositories/category.repository";

export default class CategoryService {
  private categoryRepository: CategoryRepository;
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAll(): Promise<any> {
    const data = await this.categoryRepository.getAll();
    return data;
  }
  async getOne(id: number): Promise<any> {
    const data = await this.categoryRepository.getOne(id);
    return data;
  }
  async create(data: any) {
    await this.categoryRepository.create(data);
  }
}
