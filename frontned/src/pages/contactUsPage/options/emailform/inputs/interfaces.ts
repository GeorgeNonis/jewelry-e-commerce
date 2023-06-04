import { Data } from "../interfaces";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface FormProps {
  values: {
    limit: number;
    value: string;
    data: Data;
    formdata: FormData;
  };
  handlers: {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSumbitHandler: (e: React.FormEvent) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChangeFormHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
