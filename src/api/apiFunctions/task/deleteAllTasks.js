import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const deleteAllTasks = async params => {
  const response = await axiosInstance.delete(`${endpoints.task.deleteAll}`, {
    params,
  });
  return response.data;
};

export default deleteAllTasks;
