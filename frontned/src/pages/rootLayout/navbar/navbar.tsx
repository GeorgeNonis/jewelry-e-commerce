import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { allCategories } from "../../../config";
import styles from "./styles.module.scss";
import { useNavbar } from "./useNavbar";
import MobileMenu from "./mobileMenu/mobileMenu";
import CartQuantity from "./cartQuantity/cartQuantity";

const Navbar = () => {
  const {
    burgerHandler,
    burgerMenu: burgerState,
    cartHandler,
    cart,
  } = useNavbar();
  const itemsLength = allCategories[4].items.length;
  return (
    <div className={styles.container}>
      <div className={styles.navbarContent}>
        <Link to={"/"}>
          <img
            className={styles.logo}
            src="https://cdn.discordapp.com/attachments/1056419450473152533/1107367887200604230/Neilyo77_Please_create_a_minimalistic_round_logo_for_a_jewelry__3c47f953-aaba-4798-9174-b4f517fd0d01.png"
            alt="logo"
          />
        </Link>
        <div className={styles.actions}>
          <Link to={"/categories/All"}>
            <h3>Categories</h3>
          </Link>
          <Link
            to={`/categories/product/${
              allCategories[4].items[Math.floor(Math.random() * itemsLength)].id
            }`}
          >
            <h3>Products Page</h3>
          </Link>
          <CartQuantity
            cartHandler={cartHandler}
            cartQuantity={cart.quantity}
          />
        </div>
        {<MobileMenu handler={burgerHandler} crt={burgerState} />}
        <div className={styles.phone} onClick={burgerHandler}>
          <CartQuantity
            cartHandler={cartHandler}
            cartQuantity={cart.quantity}
          />
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
