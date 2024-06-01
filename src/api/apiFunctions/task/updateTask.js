import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const updateTask = async ({ id, ...body }) => {
  const response = await axiosInstance.patch(`${endpoints.task.patch}/${id}`, {
    ...body,
  });
  return response.data;
};

export default updateTask;
