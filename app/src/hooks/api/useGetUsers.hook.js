import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useGlobalUser } from "../../context/user";

export const useGetUsers = () => {
  const { handleRequest, data, error, isLoading } = useRequest();

  function getUsers(search) {
    handleRequest(axiosInstance.get(`/usuarios/${search}`));
  }

  return {
    dataUsers: data,
    getUsers,
  };
};
