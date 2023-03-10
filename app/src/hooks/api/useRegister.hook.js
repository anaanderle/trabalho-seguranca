import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useGlobalUser } from "../../context/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToastr } from "../index";

export const useRegister = () => {
  const [, setGlobalUser] = useGlobalUser();
  const { handleRequest, data, error, isLoading } = useRequest();
  const navigate = useNavigate();
  const showToastr = useToastr();

  useEffect(() => {
    if (data) {
      setGlobalUser(data);
      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      showToastr(error.response.data.message);
    }
  }, [error]);

  function register(name, phoneNumber, imageUrl, password, email) {
    handleRequest(
      axiosInstance.post("/usuarios", {
        nome: name,
        email: email,
        telefone: phoneNumber,
        senha: password,
        imagemUrl: imageUrl,
        permissoes: ["USUARIO"],
      })
    );
  }

  return {
    register,
  };
};
