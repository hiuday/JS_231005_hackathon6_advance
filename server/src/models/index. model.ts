import Answer from "./answer.model";
import Category from "./category.model";
import Question from "./question.model";

const createTable = () => {
  Question.sync().then(() => console.log("Created table"));
  Answer.sync().then(() => console.log("Created table"));
  Category.sync().then(() => console.log("Created table"));
};
export default createTable;
