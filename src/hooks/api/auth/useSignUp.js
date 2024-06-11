import { useMutation } from "@tanstack/react-query";
import SignUp from "../../../api/apiFunctions/auth/SignUp";

const useSignUp = () => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: body => SignUp(body),
  });
};

export default useSignUp;
