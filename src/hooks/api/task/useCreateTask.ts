import { useMutation } from "@tanstack/react-query";
import createTask from "../../../api/apiFunctions/task/createTask";

export interface CreateTaskDto {
  title: string;
}

const useCreateTask = () => {
  return useMutation({
    mutationKey: ["createTask"],
    mutationFn: (body: CreateTaskDto) => createTask(body),
  });
};

export default useCreateTask;
