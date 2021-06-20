import { Router } from 'express';
import TasksController from '../controllers/CloningController';

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post('/', tasksController.create);

export default tasksRouter;
