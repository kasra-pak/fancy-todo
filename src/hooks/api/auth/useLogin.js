import { useMutation } from "@tanstack/react-query";
import Login from "../../../api/apiFunctions/auth/login";

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: body => Login(body),
  });
};

export default useLogin;
