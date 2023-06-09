import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
// import { Image } from "semantic-ui-react";
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

/**
 * With Scrollbar
 */

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "./WithScrollbar.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// class WithScrollbar extends React.Component {
//   state = { additionalTransfrom: 0 };
//   render() {
//     const CustomSlider = ({ carouselState }) => {
//       let value = 0;
//       let carouselItemWidth = 0;
//       if (this.Carousel) {
//         carouselItemWidth = this.Carousel.state.itemWidth;
//         const maxTranslateX = Math.round(
//           // so that we don't over-slide
//           carouselItemWidth *
//             (this.Carousel.state.totalItems -
//               this.Carousel.state.slidesToShow) +
//             150
//         );
//         value = maxTranslateX / 100; // calculate the unit of transform for the slider
//       }
//       const { transform } = carouselState;
//       return (
//         <div className="custom-slider">
//           <input
//             type="range"
//             value={Math.round(Math.abs(transform) / value)}
//             defaultValue={0}
//             max={
//               (carouselItemWidth *
//                 (carouselState.totalItems - carouselState.slidesToShow) +
//                 (this.state.additionalTransfrom === 150 ? 0 : 150)) /
//               value
//             }
//             onChange={(e) => {
//               if (this.Carousel.isAnimationAllowed) {
//                 this.Carousel.isAnimationAllowed = false;
//               }
//               const nextTransform = e.target.value * value;
//               const nextSlide = Math.round(nextTransform / carouselItemWidth);
//               if (
//                 e.target.value == 0 &&
//                 this.state.additionalTransfrom === 150
//               ) {
//                 this.Carousel.isAnimationAllowed = true;
//                 this.setState({ additionalTransfrom: 0 });
//               }
//               this.Carousel.setState({
//                 transform: -nextTransform, // padding 20px and 5 items.
//                 currentSlide: nextSlide,
//               });
//             }}
//             className="custom-slider__input"
//           />
//         </div>
//       );
//     };
//     return (
//       <Carousel
//         ssr={false}
//         ref={(el) => (this.Carousel = el)}
//         partialVisbile={false}
//         customButtonGroup={<CustomSlider />}
//         itemClass="slider-image-item"
//         responsive={responsive}
//         containerClass="carousel-container-with-scrollbar"
//         additionalTransfrom={-this.state.additionalTransfrom}
//         beforeChange={(nextSlide) => {
//           if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
//             this.setState({ additionalTransfrom: 150 });
//           }
//           if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
//             this.setState({ additionalTransfrom: 0 });
//           }
//         }}
//       >
//         <div className="image-container increase-size">
//           <img
//             draggable={false}
//             style={{ width: "100%", cursor: "pointer" }}
//             src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//           />
//         </div>
//         <div className="increase-size">
//           <img
//             draggable={false}
//             style={{ width: "100%", cursor: "pointer" }}
//             src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
//           />
//         </div>

//         <div className="image-container increase-size">
//           <img
//             draggable={false}
//             style={{ width: "100%", cursor: "pointer" }}
//             src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//           />
//         </div>

//         <div className="image-container increase-size">
//           <img
//             draggable={false}
//             style={{ width: "100%", cursor: "pointer" }}
//             src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//           />
//         </div>

//         <div className="image-container increase-size">
//           <img
//             draggable={false}
//             style={{ width: "100%", cursor: "pointer" }}
//             src="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//           />
//         </div>
//         <div className="image-container increase-size">
//           <img
//             draggable={false}
//             style={{ width: "100%", cursor: "pointer" }}
//             src="https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
//           />
//         </div>
//       </Carousel>
//     );
//   }
// }

// export default WithScrollbar;
