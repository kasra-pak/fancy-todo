import { UpdateTaskParams } from "@hooks/api/task/useUpdateTask";
import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const updateTask = async ({ id, ...body }: UpdateTaskParams) => {
  const response = await axiosInstance.patch(`${endpoints.task.patch}/${id}`, {
    ...body,
  });
  return response.data;
};

export default updateTask;
