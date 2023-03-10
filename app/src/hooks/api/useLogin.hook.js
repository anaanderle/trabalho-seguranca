import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useEffect } from "react";
import { useGlobalUser } from "../../context/user";
import { useToastr } from "../index";

export const useLogin = () => {
  const { handleRequest, data, error, isLoading } = useRequest();
  const [, setGlobalUser] = useGlobalUser();
  const showToastr = useToastr();

  useEffect(() => {
    if (data) setGlobalUser(data);
  }, [data]);

  useEffect(() => {
    if (error) {
      showToastr("Email ou senha inválidos");
    }
  }, [error]);

  function login(email, password) {
    handleRequest(
      axiosInstance.post(
        "/login",
        {},
        {
          auth: {
            username: email,
            password: password,
          },
        }
      )
    );
  }

  return {
    login,
  };
};
