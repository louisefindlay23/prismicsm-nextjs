import { PrismicLink, PrismicText } from "@prismicio/react";
import styles from "../styles/navigation.module.css";

export default function Navigation({ navigation }) {
    return (
        <nav className={styles.nav}>
            <ul>
                {navigation.data.slices[0].items.length > 0 && (
                    <ul>
                        {navigation.data.slices[0].items.map((item, i) => {
                            return (
                                <li key={JSON.stringify(item)}>
                                    <PrismicLink field={item.navigation_links}>
                                        <PrismicText
                                            field={item.navigation_text}
                                        />
                                    </PrismicLink>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </ul>
        </nav>
    );
}
