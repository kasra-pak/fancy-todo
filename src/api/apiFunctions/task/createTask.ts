import { CreateTaskDto } from "@hooks/api/task/useCreateTask";
import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const createTask = async (body: CreateTaskDto) => {
  const response = await axiosInstance.post(endpoints.task.create, body);
  return response.data;
};

export default createTask;
