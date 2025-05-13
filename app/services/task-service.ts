import { injectable } from "inversify";

export type Task = {
  description: string;
  completed: boolean;
};

export interface TaskServiceInterface {
  addTask(task: Task): void;
  getTasks(): Task[];
  toggleChecked(index: number): void;
}

@injectable()
export class TaskService implements TaskServiceInterface {
  private tasks: Task[] = [];

  constructor() {
    this.tasks = [
      { description: "Task 1", completed: false },
      { description: "Task 2", completed: true },
    ];
  }

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  toggleChecked(index: number): void {
    console.log("toggleChecked", index);
    console.log("found task", this.tasks[index]);

    this.tasks[index].completed = !this.tasks[index].completed;
    console.log("tasks", this.tasks);
  }
}
