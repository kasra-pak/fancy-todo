import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";


 const getTasks = async () => {
  const response = await axiosInstance.get(endpoints.task.getAll);
  return response.data;
};

export default getTasks

