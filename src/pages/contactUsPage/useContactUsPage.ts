import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks";
import { topicToSubjectMapping } from "../../config";
import { GenericObj } from "./options/interfaces";

export const useContactUsPage = () => {
  const [inputState, setInputState] = useState(false);
  const [subjectState, setSubjectState] = useState(false);
  const [option, setOption] = useState("");
  const [subject, setSubject] = useState("");
  const topicRef = useOutsideClick(() => {
    setInputState(false);
  });
  const subjectRef = useOutsideClick(() => {
    setSubjectState(false);
  });
  const divRef = useRef<HTMLDivElement>(null);
  const height = divRef.current?.scrollHeight;
  const subDivRef = useRef<HTMLDivElement>(null);
  const subDivHeight = divRef.current?.scrollHeight;
  const subjectsOptions = option
    ? topicToSubjectMapping[option as keyof GenericObj]
    : [];
  const inputHandler = () => {
    setInputState(!inputState);
  };
  const subjectHandler = () => {
    setSubjectState(!subjectState);
  };

  const selectOptionHandler = (option: string) => {
    setOption(option);
    setInputState(false);
  };
  const selectSubjectHandler = (sbj: string) => {
    setSubject(sbj);
    setSubjectState(false);
  };

  const values = {
    inputState,
    divRef,
    topicRef,
    subjectRef,
    subDivRef,
    subjectState,
    height,
    subject,
    option,
    subjectsOptions,
    subDivHeight,
  };
  const handlers = {
    inputHandler,
    selectOptionHandler,
    selectSubjectHandler,
    subjectHandler,
  };
  return { ...values, ...handlers };
};
