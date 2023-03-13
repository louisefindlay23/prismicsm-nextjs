import { PrismicLink, PrismicText } from "@prismicio/react";
import styles from "./Header.module.css";

export default function Navigation({ navigation }) {
  return (
    <nav className={styles.nav}>
      {navigation.length > 0 && (
        <ul>
          {navigation.map((item) => {
            return (
              <li key={JSON.stringify(item)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.text} />
                </PrismicLink>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
