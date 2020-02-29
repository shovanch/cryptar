import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import CurrencyListContext from "contexts/CurrencyListContext";
import Table from "components/Table";
import Pagination from "components/Pagination";
import LoadingSpinner from "components/LoadingSpinner";
import Error from "components/Error";
import { API_URL, API_KEY } from "../config";

const HomeView = () => {
  const { currencyList, currencyListLoaded, hasError } = useContext(
    CurrencyListContext
  );
  // Handle pagination states
  const [pageCount, setPageCount] = useState(1);
  const [currencyArr, setCurrencyArr] = useState("");

  useEffect(() => {
    // Slice the currency list from currencyList context, based on page number
    const startIndex = (pageCount - 1) * 10 * 2;
    const endIndex = startIndex + 15;

    const currencyStr = currencyList
      .slice(startIndex, endIndex)
      .map(i => i.id)
      .join(",");

    setCurrencyArr(currencyStr);
  }, [currencyList, pageCount, currencyListLoaded]);

  // Function to chan ge pages
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
  if (hasError) return <Error errText="UH OH! Error Happened" />;

  /* Get the loaded value from context,
    if currencyList context is not set, keep displaying loading on home
    (Without currencyList value, API call can't be made on HomeView) */
  if (!currencyListLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isLoading && currencyListLoaded ? (
        <LoadingSpinner />
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
