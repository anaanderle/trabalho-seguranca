import "./registerScreen.css";
import { TextInput, FormContainer, Button } from "../../components";
import { useForm, useLogin, useRegister } from "../../hooks";
import { INITIAL_FORM_DATA_VALUE_REGISTER } from "../../helpers/constraints";
import { useGlobalUser } from "../../context/user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function RegisterScreen() {
  const { formData, handleChange, handleCheckboxChange, validateFormFields } =
    useForm(INITIAL_FORM_DATA_VALUE_REGISTER);
  const [globalUser, setGlobalUser] = useGlobalUser();
  const navigate = useNavigate();
  const { register } = useRegister();

  function handleSubmit(event) {
    event.preventDefault();

    register(
      formData.name.value,
      formData.phoneNumber.value,
      formData.imageUrl.value,
      formData.password.value,
      formData.email.value
    );
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <section className="mainContainer loginScreenContainer">
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <TextInput
            label="Email:"
            name="email"
            type="text"
            value={formData.email.value}
            error={formData.email.error}
            handleChange={handleChange}
          />
          <TextInput
            label="Nome:"
            name="name"
            type="text"
            value={formData.name.value}
            error={formData.name.error}
            handleChange={handleChange}
          />
          <TextInput
            label="Telefone:"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber.value}
            error={formData.phoneNumber.error}
            handleChange={handleChange}
          />
        </div>
        <div>
          <TextInput
            label="URL Imagem:"
            name="imageUrl"
            type="text"
            value={formData.imageUrl.value}
            error={formData.imageUrl.error}
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
        </div>

        <Button extraClasses="textButton">FINALIZAR</Button>
      </FormContainer>
      <Button extraClasses="textButton" color="Red" handleClick={handleBack}>
        VOLTAR
      </Button>
    </section>
  );
}
