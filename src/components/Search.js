import React from "react";
import SearchIcon from "../assets/images/search.svg";

const Search = () => (
  <form className="header-search">
    <button type="button" className="header-search__button">
      <img src={SearchIcon} alt="" />
    </button>
    <input
      type="text"
      className="header-search__input"
      placeholder="Search cryptocurrency"
    />
  </form>
);

export default Search;
