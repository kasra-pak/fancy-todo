import { useMutation } from "@tanstack/react-query";
import deleteAllTasks from "../../../api/apiFunctions/task/deleteAllTasks";

const useDeleteAllTasks = () => {
  return useMutation({
    mutationKey: ["deleteAllTasks"],
    mutationFn: params => deleteAllTasks(params),
  });
};

export default useDeleteAllTasks;
