import Category from "../models/category.model";

export default class CategoryRepository {
  async getAll(): Promise<any> {
    return await Category.findAll();
  }
  async getOne(id: number): Promise<any> {
    return await Category.findAll({ where: { id } });
  }
  async create(data: any) {
    return await Category.create(data);
  }
}
