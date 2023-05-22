import { Outlet, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import * as Comp from "../../components";
import { useEffect, useState } from "react";
import ScrollToTop from "../../components/scrollToTop/scrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(false);
  }, [location]);
  return (
    <main className={styles.mainContent}>
      <Comp.Navbar />
      {loading ? <Comp.LoadingSpinner /> : <Outlet />}
      <ScrollToTop />
      <Comp.Footer />
    </main>
  );
};
export default RootLayout;
