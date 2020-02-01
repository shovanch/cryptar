import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageCount, handlePaginationClick }) => (
  <div className="pagination">
    <button
      type="button"
      className="pagination-button"
      onClick={() => handlePaginationClick("prev")}
      disabled={pageCount <= 1}
    >
      &#10229;
    </button>
    <span className="pagination-info">{pageCount}</span>
    <button
      type="button"
      onClick={() => handlePaginationClick("next")}
      className="pagination-button"
    >
      &#10230;
    </button>
  </div>
);

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
};

export default Pagination;
