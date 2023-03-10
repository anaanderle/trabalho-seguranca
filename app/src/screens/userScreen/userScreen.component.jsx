import "./userScreen.css";
import {
  Header,
  InfoUser,
  TextInput,
  FormContainer,
  Button,
} from "../../components";
import { useGlobalUser } from "../../context/user";
import { useEffect, useState } from "react";
import { useGetMe, useForm, useEdit } from "../../hooks";
import { INITIAL_FORM_DATA_VALUE_EDIT } from "../../helpers/constraints";

export function UserScreen() {
  const [globalUser] = useGlobalUser();
  const { getMe } = useGetMe();
  const { edit } = useEdit();
  const [trigger, setTrigger] = useState(false);
  const { formData, handleChange, handleCheckboxChange, validateFormFields } =
    useForm(INITIAL_FORM_DATA_VALUE_EDIT);

  useEffect(() => {
    if (globalUser) getMe();
  }, [globalUser]);

  useEffect(() => {
    if (globalUser) getMe();
  }, [trigger]);

  function handleSubmit(event) {
    event.preventDefault();

    edit(formData.name.value, formData.imageUrl.value);

    setTrigger(!trigger);
  }

  return (
    <section className="mainContainer">
      <Header />
      <div className="userScreen">
        {globalUser ? <InfoUser me /> : null}
        <div className="editBox">
          <FormContainer onSubmit={handleSubmit} extraClasses="editForm">
            <TextInput
              label="Nome:"
              name="name"
              type="text"
              value={formData.name.value}
              error={formData.name.error}
              handleChange={handleChange}
            />

            <TextInput
              label="URL Imagem:"
              name="imageUrl"
              type="text"
              value={formData.imageUrl.value}
              error={formData.imageUrl.error}
              handleChange={handleChange}
            />

            <Button extraClasses="textButton">EDITAR</Button>
          </FormContainer>
        </div>
      </div>
    </section>
  );
}
