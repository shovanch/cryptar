import React from "react";

const Pagination = () => (
  <div className="pagination">
    <button className="pagination-button" disabled>
      &#10229;
    </button>
    <span className="pagination-info">Page 1</span>
    <button className="pagination-button">&#10230;</button>
  </div>
);

export default Pagination;
