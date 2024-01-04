import { toast } from "react-toastify";

export const handleGenericSubmit = async (
  validationFunction,
  serviceFunction,
  successMessage,
  errorMessage,
  navigationAction,
  formValues,
  setFormValues,
  setIsLoading,
  values,
  id
) => {
  if (validationFunction()) {
    setIsLoading(true);
    try {
      if (id) {
        await serviceFunction(id, values);
      } else {
        await serviceFunction(values);
      }

      setIsLoading(false);
      toast.success(successMessage);
      navigationAction();
      setFormValues(formValues);
    } catch (err) {
      setIsLoading(false);
      toast.error(err?.response?.data?.message || errorMessage);
    }
  }
};
