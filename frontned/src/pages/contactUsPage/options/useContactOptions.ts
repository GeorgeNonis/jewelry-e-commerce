import { useRef, useState } from "react";

export const useContactOptions = () => {
  const [callinfo, setCallinfo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hight = ref.current?.scrollHeight;
  const callHandler = () => {
    setCallinfo(!callinfo);
  };

  const values = {
    ref,
    callinfo,
    hight,
  };

  const handlers = {
    callHandler,
  };
  return {
    ...handlers,
    ...values,
  };
};
