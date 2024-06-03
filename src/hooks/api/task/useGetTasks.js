import { useQuery } from "@tanstack/react-query";
import getTasks from "../../../api/apiFunctions/task/getTasks";

const useGetTasks = params => {
  return useQuery({
    queryKey: ["getTasks", params],
    queryFn: () => getTasks(params),
  });
};

export default useGetTasks;
