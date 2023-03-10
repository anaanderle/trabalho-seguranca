import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useToastr } from "../index";

export const useResetPassword = () => {
  const { handleRequest, data, error, isLoading } = useRequest();
  const showToastr = useToastr();

  function resetPassword(email) {
    handleRequest(
      axiosInstance.post("/usuarios/senha/alterar/solicitar/publico", {
        email: email,
      })
    );
  }

  return {
    resetPassword,
  };
};
