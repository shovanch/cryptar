import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL, API_KEY } from "../config";

const CurrencyListContext = React.createContext({
  currencyList: [],
  currencyListLoaded: false,
  error: false
});

export const CurrencyListConsumer = CurrencyListContext.Consumer;

export const CurrencyListProvider = props => {
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyListLoaded, setCurrencyListLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCurrencyList = async () => {
      // const url = `${API_URL}/currencies?key=${API_KEY}&attributes=id,name`;
      // const url =
      //   "https://gist.githack.com/shovanch/d5d9f9dcea9c68fa2073b63543a2a16f/raw/4f9bfde775c8bfe84a60358cf6c065cf6cf718cf/currlist.json";
      const url =
        "https://cors-anywhere.herokuapp.com/https://nomics.com/data/currencies/ticker?interval=1d&labels=0&limit=150&start=0";

      try {
        // const res = await axios.get(url);
        const res = await axios.get(url, {
          headers: { "'X-Requested-With'": "fetch" }
        });
        const { data } = res;
        const dataArray = data.items;
        setCurrencyList(dataArray);
        setCurrencyListLoaded(true);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchCurrencyList();
  }, []);

  return (
    <CurrencyListContext.Provider
      value={{ currencyList, currencyListLoaded, hasError }}
    >
      {props.children}
    </CurrencyListContext.Provider>
  );
};

export default CurrencyListContext;
