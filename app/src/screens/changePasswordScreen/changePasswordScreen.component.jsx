import "./changePasswordScreen.css";
import { TextInput, FormContainer, Button } from "../../components";
import { useForm, useChangePassword } from "../../hooks";
import { INITIAL_FORM_DATA_VALUE_CHANGE_PASSWORD } from "../../helpers/constraints";

export function ChangePasswordScreen() {
  const { formData, handleChange, handleCheckboxChange, validateFormFields } =
    useForm(INITIAL_FORM_DATA_VALUE_CHANGE_PASSWORD);
  const { changePassword } = useChangePassword();
  const searchParams = new URLSearchParams(window.location.search);

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateFormFields()) return null;

    changePassword(formData.password.value, searchParams.get("token"));
  }

  return (
    <section className="mainContainer loginScreenContainer">
      <FormContainer onSubmit={handleSubmit} extraClasses="loginForm">
        <TextInput
          label="Senha:"
          name="password"
          type="text"
          value={formData.password.value}
          error={formData.password.error}
          handleChange={handleChange}
        />

        <Button extraClasses="textButton">ALTERAR</Button>
      </FormContainer>
    </section>
  );
}
