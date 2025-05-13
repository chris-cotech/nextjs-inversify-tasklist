import { Container } from "inversify";
import { TYPES } from "./types";
import { TaskServiceInterface, TaskService } from "../services/task-service";

const container = new Container();
container
  .bind<TaskServiceInterface>(TYPES.TaskService)
  .to(TaskService)
  .inSingletonScope();

export { container };
