import { Data } from "./interfaces";
import { useState } from "react";

export const useEmailform = () => {
  const [data, setData] = useState<Data>({
    mr: "",
    ms: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newState = {
      mr: "",
      ms: "",
    };
    setData({ ...newState, [name]: value });
  };

  const onSumbitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return { onChangeHandler, onSumbitHandler, data };
};
