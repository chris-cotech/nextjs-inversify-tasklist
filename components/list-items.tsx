"use client";

import { Task } from "@/app/services/task-service";
import { cx } from "class-variance-authority";

export const ListItems = ({
  tasks,
  onChecked,
}: {
  tasks: Task[];
  onChecked: (index: number) => void;
}) => {
  return (
    <div className="max-h-[40rem] overflow-y-auto">
      <h2 className="text-xl font-semibold mt-8 text-center">Task List</h2>
      <ul className="space-y-2 flex flex-col justify-center items-center mt-4">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="flex flex-wrap gap-4 items-center w-[20rem] border border-neutral-700 rounded-md p-2">
              <input
                id={`task-${index}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  onChecked(index);
                }}
                className="form-checkbox"
              />
              <label
                className={cx("text-sm", task.completed && "line-through")}
                htmlFor={`task-${index}`}
              >
                {task.description}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
