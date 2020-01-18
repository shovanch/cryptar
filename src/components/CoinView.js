import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinInfo from "components/CoinInfo";
import Loading from "components/Loading";
import NotFound from "components/NotFound";
import { API_URL, API_KEY } from "../config";

const CoinView = ({ match }) => {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const currId = match.params.id;

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
  }, []);

  if (isError) return <NotFound />;

  if (isLoading) return <Loading />;

  return (
    <>
      <button type="button" className="btn-back" disabled>
        &#10229; Go back
      </button>
      {currency.length > 0 && <CoinInfo currency={currency} />}
    </>
  );
};
// (
//   <>
//     <button type="button" className="btn-back" disabled>
//       &#10229; Go back
//     </button>
//     <CoinInfo />
//   </>
// );

export default CoinView;
