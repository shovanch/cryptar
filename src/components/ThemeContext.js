import React, { useState, useLayoutEffect } from "react";

const ThemeContext = React.createContext({
  isDark: true,
  toggle: () => {}
});

// Styles
const lightTheme = [
  "--bg-color: #fff",
  "--primary-text-color: #000",
  "--primary-text-background: #fff",
  "--heading: #000",
  "--loading: #333",
  "--search: #EfEfEf",
  "--shadow: #d2d2d2"
];

const darkTheme = [
  "--bg-color: #17171a",
  "--primary-text-color: #d1d1d1",
  "--primary-text-background: #191a1d",
  "--heading: #a0a0a0",
  "--loading: #dcdddd",
  "--search: #1f1f1f",
  "--shadow: #0c0c0c"
];

export const ThemeProvider = props => {
  // store the current theme
  const [isDark, setIsDark] = useState(
    window.localStorage.getItem("darkTheme")
  );

  const applyTheme = theme => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  // Toggle theme
  const toggle = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";
    setIsDark(!isDark);
    window.localStorage.setItem("darkTheme", !isDark);
  };

  // Paints the app before it renders elements
  useLayoutEffect(() => {
    const lastThemeDark = window.localStorage.getItem("darkTheme");

    // last Chosen theme was dark from localStorage - set to true, apply darkTheme
    if (lastThemeDark === "true") {
      setIsDark(true);
      applyTheme(darkTheme);
    }

    if (lastThemeDark === "false") {
      setIsDark(false);
      applyTheme(lightTheme);
    }
    // if theme changers, repaint the app
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggle
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
