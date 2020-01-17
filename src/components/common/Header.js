import React from "react";
import Search from "../Search";
import { ReactComponent as LightBtn } from "assets/images/sun.svg";
import { ReactComponent as DarkBtn } from "assets/images/moon.svg";

const Header = () => (
  <header className="header">
    <a href="/" className="header-logo">
      CrypTr.
    </a>
    <Search />
    <button className="mode-button">
      {/* <DarkBtn class="mode-icon" /> */}
      <LightBtn class="mode-icon" />
    </button>
  </header>
);

export default Header;
