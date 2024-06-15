import { LoginBody } from "@hooks/api/auth/useLogin";
import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const Login = async (body: LoginBody) => {
  const response = await axiosInstance.post(endpoints.auth.login, body);
  return response.data;
};

export default Login;
