import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "components/Table";
import Pagination from "components/Pagination";
import Loading from "components/Loading";
import { API_URL, API_KEY } from "../config";

const HomeView = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  //https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR

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

  return (
    <>
      {isLoading ? <Loading /> : <Table />}

      {/* <Pagination /> */}
    </>
  );
};

export default HomeView;
