import { PrismicLink, PrismicText } from "@prismicio/react";

export default function Navigation({ navigation }) {
    return (
        <nav>
            <ul>
                {slice.items.length > 0 && (
                    <ul>
                        {slice.items.map((item) => {
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
