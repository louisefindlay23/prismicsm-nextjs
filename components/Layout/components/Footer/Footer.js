import { PrismicText } from "@prismicio/react";
import styles from "./Footer.module.css";

export default function Footer({ siteAuthor }) {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}{" "}
        <PrismicText field={siteAuthor}></PrismicText>
      </p>
    </footer>
  );
}
