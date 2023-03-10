import { useGlobalToastr } from "../context/toastr";

export function useToastr() {
  const [, setToastr] = useGlobalToastr();

  function showToastr(message) {
    setToastr(message);
  }

  return showToastr;
}
