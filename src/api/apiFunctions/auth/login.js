import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const Login = async body => {
  const response = await axiosInstance.post(endpoints.auth.login, body);
  return response.data;
};

export default Login;
