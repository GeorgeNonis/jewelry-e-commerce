import { useState } from "react";
import { FormData } from "./interfaces";

export const useFormInputs = () => {
  const [formdata, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const onChangeFormHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const values = {
    formdata,
  };
  const handlers = {
    onChangeFormHandler,
  };
  return { values, handlers };
};
