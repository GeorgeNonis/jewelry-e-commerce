import { useState } from "react";

export const useFaq = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleQuestionClick = (index: number) => {
    setOpenIndex(index);
  };

  return { handleQuestionClick, openIndex };
};
