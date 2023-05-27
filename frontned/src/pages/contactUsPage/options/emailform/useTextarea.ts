import { useState } from "react";

export const useTextarea = () => {
  const limit = 1000;
  const [value, setValue] = useState("");

  const values = {
    limit,
    value,
  };

  return { values, setValue };
};
