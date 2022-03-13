import { useEffect, useState } from "react";

const useFetchWissol = () => {
  const [prices, setPrices] = useState();

  useEffect(() => {
    fetch("https://api.wissol.ge/FuelPriceHistory?limit=30")
      .then((response) => response.json())
      .then((data) => setPrices(data));
  }, []);

  return { prices };
};

export default useFetchWissol;
