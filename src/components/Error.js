import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/error.png";

const Error = ({ errText }) => (
  <div className="error">
    <div className="error-text">
      <h1>{errText}</h1>
      <Link to="/">⟵ Go back to home</Link>
    </div>
    <div className="error-img">
      <img src={errorImg} alt="" />
    </div>
  </div>
);

export default Error;
