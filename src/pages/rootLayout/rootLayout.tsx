import { Outlet } from "react-router-dom";
import * as Comp from "../../components";
import ScrollToTop from "../../components/scrollToTop";
import Cart from "../../components/cart";
import styles from "./styles.module.scss";
import { useRootLayout } from "./useRootLayout";

const RootLayout = () => {
  const { loading } = useRootLayout();
  return (
    <main className={styles.mainContent}>
      <Comp.Navbar />
      {loading ? <Comp.LoadingSpinner /> : <Outlet />}
      <Cart />
      <ScrollToTop />
      <Comp.Footer />
    </main>
  );
};
export default RootLayout;
