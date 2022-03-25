import { useEffect, useState } from "react";

const useFetchPrices = (filter) => {
  const [data, setData] = useState([]);

  const ROOT_URL = "https://gas-prices-geo.vercel.app/api";

  useEffect(() => {
    const URLS = [
      `${ROOT_URL}/socar`,
      `${ROOT_URL}/wissol`,
      `${ROOT_URL}/lukoil`,
    ];

    URLS.map((URL) =>
      fetch(URL)
        .then((response) => response.json())
        .then((resData) => setData((prevState) => [...prevState, resData]))
    );
  }, []);

  if (filter) {
    return {
      fetchData: data.filter((item) => item.tableTitle.includes(filter))[0],
    };
  }

  return data ? { fetchData: data } : undefined;
};

export default useFetchPrices;
