import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import errorImg from "../assets/images/error.png";

const Error = ({ errText = "page not found" }) => (
  <div className="error">
    <div className="error-text">
      <h1>{errText}</h1>
      <Link to="/">⟵ Go back to home</Link>
    </div>
    <div className="error-img">
      <img src={errorImg} alt="Error Illustration" />
    </div>
  </div>
);

Error.propTypes = {
  errText: PropTypes.string
};

export default Error;
