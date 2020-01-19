import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL, API_KEY } from "../config";

const CurrencyListContext = React.createContext([]);

export const CurrencyListConsumer = CurrencyListContext.Consumer;

export const CurrencyListProvider = props => {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    const fetchCurrencyList = () => {
      const url = `${API_URL}/currencies?key=${API_KEY}&attributes=id,name`;
      axios.get(url).then(res => {
        const { data } = res;
        setCurrencyList(data);
      });
    };

    fetchCurrencyList();
  }, []);

  return (
    <CurrencyListContext.Provider value={currencyList}>
      {props.children}
    </CurrencyListContext.Provider>
  );
};

export default CurrencyListContext;
