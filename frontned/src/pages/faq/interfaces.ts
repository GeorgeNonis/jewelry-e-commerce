import { Dispatch, SetStateAction } from "react";

export interface FAQProps {
  q: string;
  a: string;
  isOpen: boolean;
  handler: (index: number) => void;
  i: number;
}
