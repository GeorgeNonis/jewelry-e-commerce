import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { formatPriceToEuro, stones } from "../../../config";
import styles from "./styles.module.scss";

const TrendingNow = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  return (
    <div className={styles.trendingContainer}>
      <h3 className={styles.sectionTitle}>Trending now</h3>
      <div className={styles.carouselContainer}>
        <Carousel
          ssr
          partialVisbile
          deviceType={"desktop"}
          itemClass="image-item"
          responsive={responsive}
        >
          {stones.map((image) => {
            return (
              <div className={styles.item} key={image.id}>
                <Link to={`/categories/product/${image.id}`}>
                  <div className={styles.mask}></div>
                </Link>
                <img src={image.img} className={styles.itemimg} />
                <span className={styles.itemname}>{image.name}</span>
                <span className={styles.itemprice}>
                  {formatPriceToEuro(image.price)}
                </span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default TrendingNow;
