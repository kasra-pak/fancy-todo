import { useMutation,  } from "@tanstack/react-query";
import deleteTask from "../../../api/apiFunctions/task/deleteTask";

const useDeleteTask = () => {
return useMutation({
  mutationKey: ['deleteTask'],
  mutationFn: (taskId) => deleteTask(taskId)
})
}

export default useDeleteTask