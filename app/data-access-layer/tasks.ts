"use server";

import { Task, TaskService } from "../services/task-service";
import { container } from "../inversify/container";
import { TYPES } from "../inversify/types";

const taskService = container.get<TaskService>(TYPES.TaskService);

export const getTasks = async (): Promise<Task[]> => {
  return taskService.getTasks();
};

export const addTask = async (task: Task): Promise<void> => {
  await taskService.addTask(task);
};

export const toggleChecked = async (index: number): Promise<void> => {
  await taskService.toggleChecked(index);
};
