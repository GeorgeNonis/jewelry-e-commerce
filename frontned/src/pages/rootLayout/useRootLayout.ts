import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useRootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, [location]);
  return { loading };
};
