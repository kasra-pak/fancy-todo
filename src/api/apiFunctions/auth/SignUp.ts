import { SignUpBody } from "@hooks/api/auth/useSignUp";
import axiosInstance from "../../axiosInstance";
import endpoints from "../../endpoints";

const SignUp = async (body: SignUpBody) => {
  const response = await axiosInstance.post(endpoints.auth.signUp, body);
  return response.data;
};

export default SignUp;
