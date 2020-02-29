import React, { useState, useEffect } from "react";
import axios from "axios";

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
      const url =
        "https://cors-anywhere.herokuapp.com/https://nomics.com/data/currencies/ticker?interval=1d&labels=0&limit=150&start=0";

      try {
        const res = await axios.get(url, {
          headers: { "'X-Requested-With'": "fetch" } // Headers for cors proxy
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
