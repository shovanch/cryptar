import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "components/ThemeContext";
import { ReactComponent as LightBtn } from "assets/images/sun.svg";
import { ReactComponent as DarkBtn } from "assets/images/moon.svg";
import Search from "../Search";

const Header = () => {
  const { isDark, toggle } = useContext(ThemeContext);

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        CrypTar.
      </Link>
      <Search />
      <button type="button" className="mode-button" onClick={() => toggle()}>
        <DarkBtn
          className={`mode-icon mode-icon--dark ${isDark ? "" : "active"}`}
        />
        <LightBtn
          className={`mode-icon mode-icon--light ${!isDark ? "" : "active"}`}
        />
      </button>
    </header>
  );
};

export default Header;
