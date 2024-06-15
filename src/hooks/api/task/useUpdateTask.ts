import { useMutation } from "@tanstack/react-query";
import updateTask from "../../../api/apiFunctions/task/updateTask";
import { TaskStatusEnum } from "src/enums/task.enum";

export interface UpdateTaskParams {
  id: string;
  status: TaskStatusEnum;
}

const useUpdateTask = () => {
  return useMutation({
    mutationKey: ["updateTask"],
    mutationFn: (body: UpdateTaskParams) => updateTask(body),
  });
};

export default useUpdateTask;
