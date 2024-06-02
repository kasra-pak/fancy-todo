import { useMutation } from "@tanstack/react-query";
import createTask from "../../../api/apiFunctions/task/createTask";

const useCreateTask = () => {
  return useMutation({
    mutationKey: ["createTask"],
    mutationFn: body => createTask(body),
  });
};

export default useCreateTask;
