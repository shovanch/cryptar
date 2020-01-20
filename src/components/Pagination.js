import React from "react";

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
    <span className="pagination-info">Page {pageCount}</span>
    <button
      type="button"
      onClick={() => handlePaginationClick("next")}
      className="pagination-button"
    >
      &#10230;
    </button>
  </div>
);

export default Pagination;
