import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useGlobalUser } from "../../context/user";

export const useGetMe = () => {
  const { handleRequest, data, error, isLoading } = useRequest();

  function getMe() {
    handleRequest(axiosInstance.get("/usuarios/me"));
  }

  return {
    dataMe: data,
    getMe,
  };
};
