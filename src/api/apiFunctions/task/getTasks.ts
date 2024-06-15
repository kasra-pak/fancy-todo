import { GetTasksDto } from "@hooks/api/task/useGetTasks";
import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";
import { TaskStatusEnum } from "src/enums/task.enum";

export interface TaskDto {
  id: string;
  title: string;
  status: TaskStatusEnum;
  createdAt: Date;
}

const getTasks = async (params: GetTasksDto) => {
  const response = await axiosInstance.get<TaskDto[]>(endpoints.task.getAll, {
    params,
  });
  return response.data;
};

export default getTasks;
