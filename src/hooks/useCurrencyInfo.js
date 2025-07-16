import { useEffect, useState } from "react";
import { API_KEY } from "../secrets.js";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!currency) return;
    fetch(
      `https://anyapi.io/api/v1/exchange/rates?base=${currency}&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(null);
        console.error(err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
