import express from "express";
import CategoryService from "../services/category.service";

const categoryController = express.Router();
const categoryService = new CategoryService();
categoryController
  .get("/", async (req: express.Request, res: express.Response) => {
    try {
      const data = await categoryService.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Get tất cả" });
    }
  })
  .get("/:id", async (req: express.Request, res: express.Response) => {
    try {
      const id = +req.params.id;
      const data = await categoryService.getOne(id);
      if (!data) {
        res.status(404).json({ msg: "not found" });
      } else {
        res.status(200).json({ data });
      }
    } catch (error) {
      res.status(500).json({ message: "Get một id" });
    }
  })
  .post("/", async (req: express.Request, res: express.Response) => {
    try {
      const newCategory = { content: req.body.content };
      await categoryService.create(newCategory);
      res.status(201).json("tạo ra đƯợc");
    } catch (error) {
      res.status(500).json({ message: "tạo thêm mới" });
    }
  });

export default categoryController;
