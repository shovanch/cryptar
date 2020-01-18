import React from "react";
import CoinInfo from "components/CoinInfo";

const CoinView = () => (
  <>
    <button type="button" className="btn-back" disabled>
      &#10229; Go back
    </button>
    <CoinInfo />
  </>
);

export default CoinView;
