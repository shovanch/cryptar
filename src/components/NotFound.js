import React from "react";
import error from "../assets/images/error.png";
const NotFound = () => (
  <div className="error">
    <div className="error-text">
      <h1>PAGE NOT FOUND!</h1>
      <a href="/">⟵ Go back to home</a>
    </div>

    <img src={error} alt="" className="error-img" />
  </div>
);

export default NotFound;
