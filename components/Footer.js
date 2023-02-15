import styles from "../styles/footer.module.css";
import { PrismicText } from "@prismicio/react";

export default function Footer({ page }) {
    return (
        <section>
            <footer className={styles.footer}>
                <p>
                    © {new Date().getFullYear()}{" "}
                    <PrismicText field={page.data.site_author}></PrismicText>
                </p>
            </footer>
        </section>
    );
}
