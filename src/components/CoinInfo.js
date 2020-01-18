import React from "react";
import { ReactComponent as Award } from "assets/images/award.svg";
import { ReactComponent as Activity } from "assets/images/activity.svg";
import { ReactComponent as Dollar } from "assets/images/dollar.svg";

// import coin from "assets/images/coin.png";

const CoinInfo = ({ currency }) => {
  // Get the first and only element from the passed prop array
  const curr = currency[0];

  return (
    <>
      <div className="coin-header">
        <img
          src={curr.logo_url}
          alt={`${curr.name} logo`}
          className="coin-logo"
        />
        <h1 className="coin-name">{curr.name}</h1>
      </div>

      <div className="coin-detail">
        <div className="coin-detail__box">
          <h3 className="coin-detail__box-label">Rank</h3>
          <h1 className="coin-detail__box-info">{curr.rank}</h1>
          <Award className="coin-detail__box-img" />
        </div>
        <div className="coin-detail__box coin-detail__box--middle">
          <h3 className="coin-detail__box-label">Current Price</h3>
          <h1 className="coin-detail__box-info">${curr.price}</h1>

          <Dollar className="coin-detail__box-img" />
        </div>
        <div className="coin-detail__box">
          <h3 className="coin-detail__box-label">Change 1D</h3>
          <h1 className="coin-detail__box-info">
            {curr["1d"].price_change_pct}%
          </h1>

          <Activity className="coin-detail__box-img" />
        </div>
      </div>

      <div className="coin-detail">
        <div className="coin-detail--text">
          <div className="coin-detail__text">
            <h2 className="coin-detail__text-label">Market Cap</h2>
            {/* <h1 className="coin-detail__text-info">
              $
              {Number(curr.market_cap)
                .toFixed(2)
                .toLocaleString()}
            </h1> */}
            <h1 className="coin-detail__text-info">
              {/* {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(curr.market_cap)} */}
              $
              {Intl.NumberFormat({
                minimumFractionDigits: 2
              }).format(curr.market_cap)}
            </h1>
          </div>
          <div className="coin-detail__text">
            <h2 className="coin-detail__text-label">Change this year</h2>
            <h1 className="coin-detail__text-info">
              {curr.ytd.price_change_pct}%
            </h1>
          </div>
        </div>
        <div className="coin-detail--text">
          <div className="coin-detail__text">
            <h2 className="coin-detail__text-label">All-time high price</h2>
            {/* <h1 className="coin-detail__text-info">${curr.high}</h1> */}
            <h1 className="coin-detail__text-info">
              $
              {Number(curr.high)
                .toFixed(2)
                .toLocaleString()}
            </h1>
          </div>
          <div className="coin-detail__text">
            <h2 className="coin-detail__text-label">All-time high date</h2>
            <h1 className="coin-detail__text-info">
              {curr.high_timestamp.split("T")[0]}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinInfo;
