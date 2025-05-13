"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListItems } from "@/components/list-items";
import { addTask, getTasks, toggleChecked } from "./data-access-layer/tasks";
import { Task } from "./services/task-service";
import { useEffect, useState } from "react";

const taskListSchemaFormSchema = z.object({
  description: z.string().refine((val) => val.length > 0, {
    message: "Description is required",
  }),
  completed: z.boolean(),
});

export type TaskForm = z.infer<typeof taskListSchemaFormSchema>;

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Initial fetch of tasks
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const form = useForm<TaskForm>({
    resolver: zodResolver(taskListSchemaFormSchema),
    defaultValues: {
      description: "",
      completed: false,
    },
  });

  const handleChecked = (index: number) => {
    toggleChecked(index);
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onSubmit = (data: TaskForm) => {
    addTask(data);
    setTasks([...tasks, data]);
  };

  return (
    <div className="p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col space-y-4">
                <Input
                  onChange={(e) => {
                    form.setValue("description", e.target.value);
                  }}
                  name="description"
                  placeholder="Task"
                />
                {form.formState.errors["description"] && (
                  <span className="text-xs text-red-500">
                    {form.formState.errors["description"].message}
                  </span>
                )}
              </div>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Adding..." : "Add Task"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>

      <ListItems tasks={tasks} onChecked={handleChecked} />
    </div>
  );
}
