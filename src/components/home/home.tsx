import { Suspense } from "react";
import {
  Categories,
  LoadingSpinner,
  ProductsProudSection,
  SeduceSection1,
  SeduceSection2,
  TrendingNow,
} from "..";
import styles from "./styles.module.scss";
// import WithScrollbar from "./trendingNow/trendingNow";

const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className={styles.categories}>
        <Categories />
        <ProductsProudSection />
        <SeduceSection1 />
        <TrendingNow />
        {/* <WithScrollbar /> */}
        <SeduceSection2 />
      </section>
    </Suspense>
  );
};
export default Home;
