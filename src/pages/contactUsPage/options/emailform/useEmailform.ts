import { useDispatch } from "react-redux";
import { FormData } from "./inputs/interfaces";
import { Data } from "./interfaces";
import { useState } from "react";
import { openEmailInfo } from "../../../../store/cart-slice";

export const useEmailform = () => {
  const limit = 1000;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [data, setData] = useState<Data>({
    mr: "",
    ms: "",
  });
  const [formdata, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
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
    setData({ mr: "", ms: "" });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    console.log({ formdata });
    dispatch(openEmailInfo());
  };

  const onChangeFormHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const values = {
    limit,
    value,
    data,
    formdata,
  };
  const handlers = {
    onChangeHandler,
    onSumbitHandler,
    setValue,
    onChangeFormHandler,
  };

  return { handlers, values };
};
