import { useMutation } from "@tanstack/react-query";
import SignUp from "../../../api/apiFunctions/auth/SignUp";

export interface SignUpBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useSignUp = () => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: (body: SignUpBody) => SignUp(body),
  });
};

export default useSignUp;
