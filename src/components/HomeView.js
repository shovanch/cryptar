import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import CurrencyListContext from "components/CurrencyListContext";
import Table from "components/Table";
import Pagination from "components/Pagination";
import Loading from "components/Loading";
import NotFound from "components/NotFound";
import { API_URL, API_KEY } from "../config";

const HomeView = () => {
  const { currencyList, currencyListLoaded, hasError } = useContext(
    CurrencyListContext
  );
  // Handle pagination states
  const [pageCount, setPageCount] = useState(1);
  const [currencyArr, setCurrencyArr] = useState("");

  useEffect(() => {
    const startIndex = (pageCount - 1) * 10 * 2;
    const endIndex = startIndex + 20;
    const str = currencyList
      .slice(startIndex, endIndex)
      .map(i => i.id)
      .join(",");
    setCurrencyArr(str);
  }, [currencyList, pageCount, currencyListLoaded]);

  const handlePaginationClick = direction => {
    if (direction === "next") {
      setPageCount(pageCount + 1);
    } else {
      setPageCount(pageCount - 1);
    }
  };

  // Handle the currencies-API call on home
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const url = `${API_URL}/currencies/ticker?key=${API_KEY}&ids=${currencyArr}`;

      const res = await axios.get(url);
      setIsLoading(false);
      const { data } = res;
      setCurrencies(data);
    };

    if (currencyArr.length > 0) {
      fetchCurrencies();
    }
  }, [currencyArr]);

  /* If error happens in getting currencyList on context,
      display  notfound */
  if (hasError) return <NotFound />;

  /* Get the loaded value from context,
    if currencyList context is not set, keep displaying loading on home
    (Without currencyList value, API call can't be made on HomeView) */
  if (!currencyListLoaded) {
    return <Loading />;
  }

  return (
    <>
      {isLoading && currencyListLoaded ? (
        <Loading />
      ) : (
        <>
          <Table currencies={currencies} />
          <Pagination
            handlePaginationClick={handlePaginationClick}
            pageCount={pageCount}
          />
        </>
      )}
    </>
  );
};

export default HomeView;
