import React from "react";
import { ReactComponent as LightBtn } from "assets/images/sun.svg";
import { ReactComponent as DarkBtn } from "assets/images/moon.svg";
import Search from "../Search";

const Header = () => (
  <header className="header">
    <a href="/" className="header-logo">
      CrypTr.
    </a>
    <Search />
    <button type="button" className="mode-button">
      {/* <DarkBtn class="mode-icon" /> */}
      <LightBtn className="mode-icon" />
    </button>
  </header>
);

export default Header;
