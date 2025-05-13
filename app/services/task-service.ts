import { injectable } from "inversify";

export type Task = {
  description: string;
  completed: boolean;
};

export interface TaskServiceInterface {
  getTasks(): Task[];
  addTask(task: Task): void;
  toggleChecked(index: number): void;
}

@injectable()
export class TaskService implements TaskServiceInterface {
  private tasks: Task[] = [];

  constructor() {
    this.tasks = [
      { description: "Preloaded task 1", completed: false },
      { description: "Preloaded task 2", completed: true },
    ];
  }

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
    // TODO: Add socket.io emit
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  toggleChecked(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].completed = !this.tasks[index].completed;
      // TODO: Add socket.io emit
    }
  }
}
