import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import CurrencyListContext from "components/CurrencyListContext";
import Table from "components/Table";
import Pagination from "components/Pagination";
import Loading from "components/Loading";
import NotFound from "components/NotFound";
import { API_URL, API_KEY } from "../config";

const HomeView = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const currencyList = useContext(CurrencyListContext);

  // console.log(currencyList.slice(0, 20)

  useEffect(() => {
    console.log(
      currencyList
        .slice(0, 20)
        .map(i => i.id)
        .join(",")
    );
  }, [currencyList]);

  useEffect(() => {
    const fetchCurrencies = () => {
      setIsLoading(true);
      const url = `${API_URL}/currencies/ticker?key=${API_KEY}&ids=BTC,ETH,XRP`;
      axios
        .get(url)
        .then(res => {
          setIsLoading(false);
          const { data } = res;
          setCurrencies(data);
        })
        .catch(error => {
          setIsError(true);
          setIsLoading(false);
        });
    };

    fetchCurrencies();
  }, []);

  if (isError) return <NotFound />;

  return (
    <>
      {isLoading ? <Loading /> : <Table currencies={currencies} />}
      {/* <Pagination /> */}
    </>
  );
};

export default HomeView;
