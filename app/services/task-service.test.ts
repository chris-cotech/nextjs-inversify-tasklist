import { TaskService } from "./task-service";
import { describe, expect, test, beforeEach } from "@jest/globals";

describe("Tasks Service", () => {
  let taskService: TaskService;

  beforeEach(() => {
    taskService = new TaskService();
  });

  test("should initialize with default tasks", () => {
    // arrange
    const expectedTasks = [
      { description: "Preloaded task 1", completed: false },
      { description: "Preloaded task 2", completed: true },
    ];

    // act
    const tasks = taskService.getTasks();

    // assert
    expect(tasks).toEqual(expectedTasks);
  });

  test("should add a new task", () => {
    // arrange
    const newTask = { description: "Task 3", completed: false };

    // act
    taskService.addTask(newTask);

    // assert
    const tasks = taskService.getTasks();
    expect(tasks).toContainEqual(newTask);
  });

  test("should toggle task completion", () => {
    // arrange
    const tasks = taskService.getTasks();
    const expectedValue = !tasks[0].completed;

    // act
    taskService.toggleChecked(0);

    // assert
    expect(tasks[0].completed).toBe(expectedValue);
  });
});
