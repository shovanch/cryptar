import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Table = ({ currencies }) => {
  let history = useHistory();
  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Symbol</th>
          <th>Currency</th>
          <th>Price</th>
          <th className="collapsable">Market Cap</th>
          <th>Change 1D</th>
          <th className="collapsable">Change 30D</th>
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
            <td>
              <img src={currency.logo_url} alt={`${currency.name} logo`} />
            </td>
            <td>{currency.symbol}</td>

            <td>{currency.name}</td>
            <td>
              $
              {Intl.NumberFormat({
                minimumFractionDigits: 2
              }).format(currency.price)}
            </td>
            <td className="collapsable">
              $
              {Intl.NumberFormat({
                minimumFractionDigits: 2
              }).format(currency.market_cap)}
            </td>
            <td>
              <span className="percent-down">
                {currency["1d"] ? `${currency["1d"].price_change_pct}%` : ""}
              </span>
            </td>
            <td className="collapsable">
              <span className="percent-down">
                {currency["30d"] ? `${currency["30d"].price_change_pct}%` : ""}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Table;
