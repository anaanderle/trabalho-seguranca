import "./loginScreen.css";
import { TextInput, FormContainer, Button } from "../../components";
import { useForm, useLogin } from "../../hooks";
import { INITIAL_FORM_DATA_VALUE_SIGNUP } from "../../helpers/constraints";
import { useGlobalUser } from "../../context/user";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function LoginScreen() {
  const { formData, handleChange, handleCheckboxChange, validateFormFields } =
    useForm(INITIAL_FORM_DATA_VALUE_SIGNUP);
  const { login } = useLogin();
  const [globalUser, setGlobalUser] = useGlobalUser();
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateFormFields()) return null;

    login(formData.email.value, formData.password.value);
    setTrigger(!trigger);
  }

  useEffect(() => {
    if (globalUser) {
      navigate("/home");
    }
  }, [trigger]);

  function handleRegister() {
    navigate("/register");
  }

  return (
    <section className="mainContainer loginScreenContainer">
      <FormContainer onSubmit={handleSubmit} extraClasses="loginForm">
        <TextInput
          label="Email:"
          name="email"
          type="text"
          value={formData.email.value}
          error={formData.email.error}
          handleChange={handleChange}
        />
        <TextInput
          label="Senha:"
          name="password"
          type="password"
          value={formData.password.value}
          error={formData.password.error}
          handleChange={handleChange}
        />
        <NavLink to="/redefinirSenha">Esqueci minha senha</NavLink>

        <Button extraClasses="textButton">ENTRAR</Button>
      </FormContainer>
      <Button
        extraClasses="textButton"
        handleClick={handleRegister}
        color="Red"
      >
        CADASTRAR
      </Button>
    </section>
  );
}
