import { useRequest } from "../index";
import { axiosInstance } from "../../api/_base/axios.instance";
import { useGlobalUser } from "../../context/user";
import { useEffect } from "react";
import { useToastr } from "../index";

export const useEdit = () => {
  const [, setGlobalUser] = useGlobalUser();
  const { handleRequest, data, error, isLoading } = useRequest();
  const showToastr = useToastr();
  useEffect(() => {
    if (data) {
      showToastr("Editado com sucesso!");
      setGlobalUser(data);
    }
  }, [data]);

  function edit(name, imageUrl) {
    handleRequest(
      axiosInstance.put("/usuarios", {
        nome: name,
        imagemUrl: imageUrl,
      })
    );
  }

  return {
    edit,
  };
};
