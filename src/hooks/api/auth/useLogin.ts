import { useMutation } from "@tanstack/react-query";
import Login from "../../../api/apiFunctions/auth/Login";

export interface LoginBody {
  email: string;
  password: string;
}

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (body: LoginBody) => Login(body),
  });
};

export default useLogin;
