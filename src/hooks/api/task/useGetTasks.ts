import { useQuery } from "@tanstack/react-query";
import getTasks from "../../../api/apiFunctions/task/getTasks";
import { TaskStatusEnum } from "src/enums/task.enum";

export interface GetTasksDto {
  status?: TaskStatusEnum;
}

const useGetTasks = (params: GetTasksDto) => {
  return useQuery({
    queryKey: ["getTasks", params],
    queryFn: () => getTasks(params),
  });
};

export default useGetTasks;
