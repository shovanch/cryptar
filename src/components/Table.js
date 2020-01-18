import React from "react";
import { withRouter } from "react-router-dom";

const Table = ({ currencies, history }) => (
  <table className="table">
    <thead className="table-header">
      <tr>
        <th>#</th>
        <th>Symbol</th>
        <th>Name</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>Change 1D</th>
        <th>Change 30D</th>
      </tr>
    </thead>
    <tbody className="table-body">
      {currencies.map(currency => (
        <tr
          className="table-row"
          key={currency.id}
          onClick={() => history.push(`currency/${currency.id}`)}
        >
          <td>{currency.rank}</td>
          <td>{currency.symbol}</td>
          <td>{currency.name}</td>
          <td>${currency.price}</td>
          <td>${currency.market_cap}</td>
          <td>
            <span className="percent-down">
              {currency["1d"].price_change_pct}
            </span>
          </td>
          <td>
            <span className="percent-down">
              {currency["30d"].price_change_pct}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default withRouter(Table);
