import "./toastr.css";
import { useGlobalToastr } from "../../context/toastr";
import { useEffect } from "react";

const TOASTR_DELAY = 5000;

export function Toastr() {
  const [mensagem, setMensagem] = useGlobalToastr();

  useEffect(() => {
    if (mensagem) {
      setTimeout(() => {
        setMensagem("");
      }, TOASTR_DELAY);
    }
  }, [mensagem, setMensagem]);
  if (!mensagem) return;

  return (
    <div className="toastrContainer">
      <p className="toastrMensagem">{mensagem}</p>
    </div>
  );
}
