import { useState } from "react";

const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const fieldValidation = validationRules[fieldName];
    if (!fieldValidation) return "";

    return fieldValidation(value);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateAllFields = () => {
    const tempErrors = {};
    let isValid = true;

    Object.keys(values).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      tempErrors[fieldName] = error;
      if (error) {
        isValid = false;
      }
    });

    setErrors(tempErrors);
    return isValid;
  };

  const setFormValues = (newValues) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  return {
    values,
    errors,
    handleOnChange,
    validateAllFields,
    setFormValues,
  };
};

export default useForm;
