import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";

export const useChangePassword = () => {
  const { handleRequest, data, error, isLoading } = useRequest();

  function changePassword(password, token) {
    handleRequest(
      axiosInstance.post("/usuarios/senha/alterar/confirmar/publico", {
        senha: password,
        token: token,
      })
    );
  }

  return {
    changePassword,
  };
};
