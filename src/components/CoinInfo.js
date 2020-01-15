import React from "react";
import coin from "assets/images/coin.png";

const CoinInfo = () => (
  <>
    <div className="coin-header">
      <img src={coin} alt="coin logo" className="coin-logo" />
      <h1 className="coin-name">bitcoin</h1>
    </div>

    <div className="coin-detail">
      <div className="coin-detail__box">
        <h3 className="coin-detail__box-label">Rank</h3>
        <h1 className="coin-detail__box-info">1</h1>
        {/* <img
            class="coin-detail__box-img"
            src="./assets/images/rank.svg"
            alt=""
          />  */}
        <svg
          className="feather feather-award coin-detail__box-img"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      </div>
      <div className="coin-detail__box coin-detail__box--middle">
        <h3 className="coin-detail__box-label">Current Price</h3>
        <h1 className="coin-detail__box-info">$100,525,213</h1>
        {/* <img
            class="coin-detail__box-img"
            src="./assets/images/price.svg"
            alt=""
          />  */}
        <svg
          className="feather feather-award coin-detail__box-img "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      </div>
      <div className="coin-detail__box">
        <h3 className="coin-detail__box-label">Change 24H</h3>
        <h1 className="coin-detail__box-info">-24%</h1>
        {/* <img
            class="coin-detail__box-img"
            src="./assets/images/share.svg"
            alt=""
          />  */}
        <svg
          className="feather feather-award coin-detail__box-img "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      </div>
    </div>

    <div className="coin-detail">
      <div className="coin-detail--text">
        <div className="coin-detail__text">
          <h2 className="coin-detail__text-label">Market Cap</h2>
          <h1 className="coin-detail__text-info">$269,123,142</h1>
        </div>
        <div className="coin-detail__text">
          <h2 className="coin-detail__text-label">Volume 24H:</h2>
          <h1 className="coin-detail__text-info">$269,123,142</h1>
        </div>
      </div>
      <div className="coin-detail--text">
        <div className="coin-detail__text">
          <h2 className="coin-detail__text-label">Market Supply</h2>
          <h1 className="coin-detail__text-info">$269,123,142</h1>
        </div>
        <div className="coin-detail__text">
          <h2 className="coin-detail__text-label">Volume 24H:</h2>
          <h1 className="coin-detail__text-info">$269,123,142</h1>
        </div>
      </div>
    </div>
  </>
);

export default CoinInfo;
