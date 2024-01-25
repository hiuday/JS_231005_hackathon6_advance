import express from "express";
import QuestionService from "../services/question.service";

const questionController = express.Router();
const questionService = new QuestionService();
questionController
  .get("/", async (req: express.Request, res: express.Response) => {
    try {
      const data = await questionService.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Get all" });
    }
  })
  .get("/:id", async (req: express.Request, res: express.Response) => {
    try {
      const id = +req.params.id;
      const data: any = await questionService.getOne(id);
      if (!data) {
        res.status(404).json({ msg: "not found" });
      } else {
        res.status(200).json({ data });
      }
    } catch (error) {
      res.status(500).json({ message: "Get không được" });
    }
  })
  .get("/:id/answers", async (req: express.Request, res: express.Response) => {
    try {
      const id = Number(req.params.id);
      const data: any = await questionService.getOne(id);
      if (!data) {
        res.status(404).json({ msg: "not found" });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);

      res.status(500).json({ msg: "get ko dc" });
    }
  })
  .post("/", async (req: express.Request, res: express.Response) => {
    try {
        const newQuestion = {
          category_id: req.body.category_id,
          content: req.body.content,
          level: req.body.level,
        };
        await questionService.create(newQuestion);
        res.status(201).json({ msg: "tạo thành công" });
      } catch (error) {
        console.log(req);
    
        res.status(500).json({ msg: "post không đƯợc" });
      }
  });

export default questionController;
