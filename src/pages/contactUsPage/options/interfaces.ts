import { ReactNode } from "react";

export interface SubjectOptionsProps {
  option: string;
}

export interface GenericObj {
  [key: string]: string[];
}

export interface useContactUsPageObj {
  inputState: boolean;
  divRef: React.RefObject<HTMLDivElement>;
  topicRef: React.MutableRefObject<any>;
  subjectRef: React.MutableRefObject<any>;
  subject: string;
  height: number | undefined;
  option: string;
  subDivHeight: number | undefined;
  subDivRef: React.MutableRefObject<any>;
  subjectsOptions: string[];
  subjectState: boolean;
  inputHandler: () => void;
  selectOptionHandler: (option: string) => void;
  selectSubjectHandler: (sbj: string) => void;
  subjectHandler: () => void;
}

export interface ContactActionProps {
  icon: ReactNode;
  btn: string;
  action: string;
  time: string;
  handler: () => void;
}
