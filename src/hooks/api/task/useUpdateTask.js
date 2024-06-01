import { useMutation } from "@tanstack/react-query";
import updateTask from "../../../api/apiFunctions/task/updateTask";

const useUpdateTask = () => {
  return useMutation({
    mutationKey: ["updateTask"],
    mutationFn: body => updateTask(body),
  });
};

export default useUpdateTask;
