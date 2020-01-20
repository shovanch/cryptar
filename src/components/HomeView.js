import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import CurrencyListContext from "components/CurrencyListContext";
import Table from "components/Table";
import Pagination from "components/Pagination";
import Loading from "components/Loading";
import NotFound from "components/NotFound";
import { API_URL, API_KEY } from "../config";

const HomeView = () => {
  const { currencyList, currencyListLoaded } = useContext(CurrencyListContext);
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

  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = () => {
      // setIsLoading(true);
      const url = `${API_URL}/currencies/ticker?key=${API_KEY}&ids=${currencyArr}`;
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

    if (currencyArr.length > 0) {
      fetchCurrencies();
    }
  }, [currencyArr]);

  if (isError) return <NotFound />;

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

  // return (
  //   <>
  //     {isLoading && currencyListLoaded ? (
  //       <Loading />
  //     ) : (
  //       <>
  //         <Table currencies={currencies} />
  //         <Pagination />
  //       </>
  //     )}
  //   </>
  // );
};

// return (
//   <>
//     {isLoading ? <Loading /> : <Table currencies={currencies} />}
//     <Pagination />
//   </>
// );
//};

export default HomeView;
