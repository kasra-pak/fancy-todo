import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const createTask = async body => {
  const response = await axiosInstance.post(endpoints.task.create, body);
  return response.data;
};

export default createTask;
