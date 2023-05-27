import { useState } from "react";
import { FormData } from "./interfaces";

export const useFormInputs = () => {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const values = {
    data,
  };
  const handlers = {
    onChangeHandler,
  };
  return { values, handlers };
};
