import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const deleteTask = async (taskId: string) => {
  const response = await axiosInstance.delete(
    `${endpoints.task.delete}/${taskId}`,
  );
  return response.data;
};

export default deleteTask;
