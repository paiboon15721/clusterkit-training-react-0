import React, { useState, createContext } from "react";

const themes = ["primary", "warning", "danger", "success"];

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(0);

  const handleChangeTheme = () => {
    let i = theme + 1;
    if (i >= themes.length) {
      i = 0;
    }
    setTheme(i);
  };

  return (
    <themeContext.Provider value={{ theme: themes[theme], handleChangeTheme }}>
      {children}
    </themeContext.Provider>
  );
};
