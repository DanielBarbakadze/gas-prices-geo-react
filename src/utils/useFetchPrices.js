import { useEffect, useState } from "react";

const useFetchPrices = (fetchNow = false) => {
  const [prices, setPrices] = useState();

  useEffect(() => {
    const URL = "https://gas-prices-geo.vercel.app/api";
    if (fetchNow) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setPrices(data));
    }
  }, [fetchNow]);

  return { prices };
};

export default useFetchPrices;
