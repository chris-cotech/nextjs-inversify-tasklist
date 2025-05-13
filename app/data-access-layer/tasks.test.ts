import { container } from "../inversify/container";
import { TYPES } from "../inversify/types";
import { TaskService } from "../services/task-service";
import { getTasks, addTask, toggleChecked } from "./tasks";
import { describe, expect, test, beforeEach } from "@jest/globals";

describe("Tasks Data Access Layer", () => {
  let taskService: TaskService;

  beforeEach(() => {
    taskService = container.get<TaskService>(TYPES.TaskService);
  });

  test("should initialize with default values", async () => {
    // arrange
    const expectedTasks = taskService.getTasks();

    // act
    const tasks = await getTasks();

    // assert
    expect(tasks).toEqual(expectedTasks);
  });

  test("should add a new task", async () => {
    // arrange
    const newTask = { description: "Task 3", completed: false };

    // act
    await addTask(newTask);

    // assert
    const tasks = taskService.getTasks();
    expect(tasks).toContainEqual(newTask);
  });

  test("should toggle task completion", async () => {
    // arrange
    const tasks = taskService.getTasks();
    const expectedValue = !tasks[0].completed;

    // act
    toggleChecked(0);

    // assert
    expect(tasks[0].completed).toBe(expectedValue);
  });
});
