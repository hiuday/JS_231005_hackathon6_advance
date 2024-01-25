import {Express} from 'express';
import questionController from '../controllers/question.controller';
import categoryController from '../controllers/category.controller';
const Router = (server:Express) => {
    server.use('/api/v1/question',questionController)
    server.use('/api/v1/category',categoryController)
}

export default Router;