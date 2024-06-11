import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const SignUp = async body => {
  const response = await axiosInstance.post(endpoints.auth.signUp, body);
  return response.data;
};

export default SignUp;
