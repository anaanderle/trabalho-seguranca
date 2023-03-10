import { FIELDS_LABEL_ENUM } from "./constraints";

export function validateObligatory(formInfos, fieldName) {
  const isFieldEmpty = formInfos[fieldName].value === "";
  return isFieldEmpty
    ? `O campo ${FIELDS_LABEL_ENUM[fieldName]} precisa ser preenchido!`
    : "";
}

export function removeAnythingThatIsNotANumber({ target }) {
  target.value = target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\.*?)\..*/g, "");
}
