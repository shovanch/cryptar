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
      const url = `${API_URL}/currencies?key=${API_KEY}&attributes=id,name`;

      try {
        const res = await axios.get(url);
        const { data } = res;
        setCurrencyList(data);
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
