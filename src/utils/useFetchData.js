import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ROOT_URL = "https://gas-prices-geo.vercel.app/api";
const URLS = [`${ROOT_URL}/socar`, `${ROOT_URL}/wissol`, `${ROOT_URL}/lukoil`];
// Cache data for 3 hour
const CACHE_PERIOD = 1000 * 60 * 60 * 3;

const useFetchData = (filter) => {
  const [data, setData] = useState([]);
  const [localData, setLocalData] = useLocalStorage("graphData");

  useEffect(() => {
    if (localData !== undefined) {
      setData(localData.value);
    } else {
      URLS.map((URL) =>
        fetch(URL)
          .then((response) => response.json())
          .then((resData) => setData((prevState) => [...prevState, resData]))
      );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (localData === undefined && data?.length === URLS.length) {
      setLocalData(data, CACHE_PERIOD);
    }
  }, [data, localData, setLocalData]);

  if (filter && data?.length) {
    return {
      fetchData: data.filter((item) => item.tableTitle.includes(filter))[0],
    };
  }

  return data?.length > 0 ? { fetchData: data } : undefined;
};

export default useFetchData;
