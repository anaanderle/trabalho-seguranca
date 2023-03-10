import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useGlobalUser } from "../../context/user";

export const useLogout = () => {
  const { handleRequest, data, error, isLoading, status } = useRequest();
  const [, setGlobalUser] = useGlobalUser();

  function logout() {
    handleRequest(axiosInstance.post("/logout"));
    setGlobalUser(null);
  }

  return {
    logout,
  };
};
