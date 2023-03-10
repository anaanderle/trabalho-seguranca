import { validateObligatory } from "./validate";

export const API_URL = "http://localhost:3000";

export const FIELDS_LABEL_ENUM = {
  password: "senha",
  email: "email",
  name: "nome",
  phoneNumber: "telefone",
  birthDate: "data de nascimento",
  imageUrl: "imagem",
};

export const INITIAL_FORM_DATA_VALUE_SIGNUP = {
  email: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
  password: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
};

export const INITIAL_FORM_DATA_VALUE_REGISTER = {
  imageUrl: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
  email: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
  name: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
  phoneNumber: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
  password: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
};

export const INITIAL_FORM_DATA_VALUE_EDIT = {
  name: {
    value: "",
    error: "",
  },
  imageUrl: {
    value: "",
    error: "",
  },
};

export const INITIAL_FORM_DATA_VALUE_RESET_PASSWORD = {
  email: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
};

export const INITIAL_FORM_DATA_VALUE_CHANGE_PASSWORD = {
  password: {
    value: "",
    error: "",
    validate: (formValue, currentFieldName) =>
      validateObligatory(formValue, currentFieldName),
  },
};
