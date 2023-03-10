import "./resetPasswordScreen.css";
import { TextInput, FormContainer, Button } from "../../components";
import { useForm, useResetPassword } from "../../hooks";
import { INITIAL_FORM_DATA_VALUE_RESET_PASSWORD } from "../../helpers/constraints";
import { useNavigate } from "react-router-dom";

export function ResetPasswordScreen() {
  const { formData, handleChange, handleCheckboxChange, validateFormFields } =
    useForm(INITIAL_FORM_DATA_VALUE_RESET_PASSWORD);
  const { resetPassword } = useResetPassword();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateFormFields()) return null;

    resetPassword(formData.email.value);
  }

  function handleLogin() {
    navigate("/login");
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

        <Button extraClasses="textButton">ENVIAR</Button>
      </FormContainer>
      <Button extraClasses="textButton" handleClick={handleLogin} color="Red">
        VOLTAR
      </Button>
    </section>
  );
}
