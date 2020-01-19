import React, { useState } from "react";

const CurrencyListContext = React.createContext({
  dark: false,
  toggle: () => {}
});

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

  return <CurrencyList.Provider vla></CurrencyList.Provider>;
};
export const CurrencyListConsumer = CurrencyListContext.Consumer;

export default CurrencyListContext;
