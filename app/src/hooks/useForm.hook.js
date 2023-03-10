import { useState } from "react";

export const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: { ...formData[name], value: value, error: "" },
    });
  }

  function handleCheckboxChange({ target }) {
    const { name, checked } = target;
    setFormData({
      ...formData,
      [name]: { ...formData[name], value: checked, error: "" },
    });
  }

  function updateFormData(data) {
    setFormData(data);
  }

  function validateFormFields() {
    const formDataWithErrors = Object.entries(formData).map(
      ([fieldName, fieldProps]) => {
        const newField = {
          ...fieldProps,
          error: fieldProps.validate(formData, fieldName),
        };

        return [fieldName, newField];
      }
    );

    const hasError = formDataWithErrors.some(([, field]) => field.error !== "");
    if (hasError) {
      const newFormData = Object.fromEntries(formDataWithErrors);
      setFormData(newFormData);
    }

    return !hasError;
  }

  return {
    formData,
    updateFormData,
    handleChange,
    handleCheckboxChange,
    validateFormFields,
  };
};
