import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import CurrencyListContext from "components/CurrencyListContext";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";

const Search = ({ history }) => {
  const { currencyList } = useContext(CurrencyListContext);

  // Get id of the searched cuurency from the currencyList array of objects
  const findCurrencyId = (value, arr) => {
    const currObj = arr.find(obj => obj.id === value);
    if (currObj) {
      return currObj.id;
    }
  };

  // Handle the search function
  const searchCurrency = e => {
    e.preventDefault();
    const searchValue = e.target.elements.coinname.value.toUpperCase();
    let currId = null;
    if (searchValue) {
      currId = findCurrencyId(searchValue, currencyList);
      currId ? history.push(`/currency/${currId}`) : history.push(`/notfound`);
    }
    e.target.elements.coinname.value = "";
  };

  return (
    <form className="header-search" onSubmit={searchCurrency}>
      <button type="button" className="header-search__button">
        <SearchIcon className="search-icon" />
      </button>
      <input
        type="text"
        name="coinname"
        className="header-search__input"
        placeholder="Search cryptocurrency"
      />
    </form>
  );
};

export default withRouter(Search);
