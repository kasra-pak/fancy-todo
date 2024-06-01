import { useQuery } from "@tanstack/react-query";
import getTasks from "../../../api/apiFunctions/task/getTasks";

const useGetTasks = () => {
  return useQuery({
    queryKey: "getTasks",
    queryFn: () => getTasks(),
  });
};

export default useGetTasks;
