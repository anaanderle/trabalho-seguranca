import { useState } from "react";
import { useToastr } from "./useToastr.hook";

export const useRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showToastr = useToastr();

  async function handleRequest(promise) {
    let responseData;
    let responseStatus;
    try {
      setError(false);
      setIsLoading(true);
      const response = await promise;
      responseData = response.data;
      responseStatus = response.status;
    } catch (error) {
      showToastr(error.response.data.message);
      setError({
        ...error,
        customErrorMessage: error.response.data.message,
      });
      responseData = null;
    } finally {
      setData(responseData);
      setIsLoading(false);
    }
  }

  return { handleRequest, data, error, isLoading };
};
