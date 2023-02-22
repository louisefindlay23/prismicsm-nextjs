import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Navigation from "./Navigation";
import { useCurrency } from "context/currencyData";
import { currencies } from "site.config";
import styles from "./Header.module.css";

export default function Header({ layout }) {
  const { currency: activeCurrency, setCurrency } = useCurrency();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <PrismicNextImage
              field={layout.data.site_logo}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Link className={styles.title} href="#">
          <PrismicRichText field={layout.data.site_title} />
        </Link>
        <Navigation navigation={layout.data.top_navigation} />
        <select
          className={styles.currencyDropdown}
          currency={activeCurrency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}>
          {Object.values(currencies).map((currency) => {
            return (
              <option value={currency.id} key={currency.id}>
                {currency.name}
              </option>
            );
          })}
        </select>
      </div>
    </header>
  );
}
