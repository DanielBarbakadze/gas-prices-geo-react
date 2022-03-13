import React, { useEffect, useState } from "react";
import useFetchPrices from "../utils/useFetchPrices";
import { useLocalStorage } from "../utils/useLocalStorage";
import styles from "./Home.module.scss";

const Home = () => {
  const [fetchNow, setFetchNow] = useState();

  const { prices } = useFetchPrices(fetchNow);

  const [savedPrices, setSavedPrices] = useLocalStorage("prices");

  useEffect(() => {
    if (savedPrices === undefined && prices === undefined) {
      setFetchNow(true as any);
    }
    if (savedPrices === undefined && prices !== undefined) {
      setSavedPrices(prices, 1000 * 60 * 60 * 3);
    }
  }, [prices]);

  return (
    <div className={styles.pageWrapper}>
      <h1>Gas Prices</h1>

      <div className={styles.boxWrapper}>
        {savedPrices?.value &&
          Array.from(savedPrices?.value).map((item: any) => (
            <div key={item.company} className={styles.companiesWrapper}>
              <h2>{item.company}</h2>
              <ul>
                {Array.from(item.pricesList).map((prices: any, idx) => (
                  <li key={idx} className={styles.pricesWrapper}>
                    <div className={styles.priceTitle}>{prices.title}</div>
                    <div className={styles.priceValue}>{prices.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;