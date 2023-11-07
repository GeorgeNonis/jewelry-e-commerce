import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const location = useLocation();
  const [visibility, setVisibility] = useState(false);
  const handler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setVisibility(true);
      } else {
        // console.log(window.scrollY);
        setVisibility(false);
      }
    };
  }, [location]);
  return {
    handler,
    visibility,
  };
};
