import { useEffect, useState } from "react";
import API_KEY from "./../secrets.js";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!currency) return;

    // Define an async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/api/v1/exchange/rates?base=${currency}&apiKey=${API_KEY}`
        );
        const json = await response.json();
        console.log("res:", json);
        setData(json);
      } catch (err) {
        setData(null);
        console.error(err);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
