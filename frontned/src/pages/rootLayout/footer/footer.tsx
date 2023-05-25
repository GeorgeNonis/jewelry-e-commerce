import { Link } from "react-router-dom";
import { footerLinks } from "../../../config";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <div
        className={styles.container}
        onMouseEnter={() => {
          // console.log(window.scrollY);
        }}
      >
        {footerLinks.map((link, i) => {
          return (
            <Link to={link.link} key={i}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
