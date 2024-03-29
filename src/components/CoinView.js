import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import CoinInfo from "components/CoinInfo";
import LoadingSpinner from "components/LoadingSpinner";
import Error from "components/Error";
import { API_URL, API_KEY } from "../config";

const CoinView = () => {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  let { currId } = useParams();

  useEffect(() => {
    const fetchCurrencies = () => {
      setIsLoading(true);
      const url = `${API_URL}/currencies/ticker?key=${API_KEY}&ids=${currId}`;
      axios
        .get(url)
        .then(res => {
          setIsLoading(false);
          const { data } = res;
          setCurrency(data);
        })
        .catch(error => {
          setIsError(true);
          setIsLoading(false);
        });
    };

    fetchCurrencies();
  }, [currId]);

  if (isError) return <Error errText="Error happened. Try again." />;

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Link to="/" className="btn-back">
        &#10229; Go back
      </Link>
      {currency.length > 0 && <CoinInfo currency={currency} />}
    </>
  );
};

export default CoinView;
