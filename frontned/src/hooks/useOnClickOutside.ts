import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    /**
     *
     * couldnt figure out the type ...
     */
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};
