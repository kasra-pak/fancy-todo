import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const getTasks = async params => {
  const response = await axiosInstance.get(endpoints.task.getAll, { params });
  return response.data;
};

export default getTasks;
