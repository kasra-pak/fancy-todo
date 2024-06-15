import { useMutation } from "@tanstack/react-query";
import deleteAllTasks from "../../../api/apiFunctions/task/deleteAllTasks";
import { TaskStatusEnum } from "src/enums/task.enum";

export interface DeleteAllTasksDto {
  status: TaskStatusEnum;
}

const useDeleteAllTasks = () => {
  return useMutation({
    mutationKey: ["deleteAllTasks"],
    mutationFn: (params: DeleteAllTasksDto) => deleteAllTasks(params),
  });
};

export default useDeleteAllTasks;
