import React, { useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";
import localStorage from "../util/localStorage";
import { scales, colorsScheme } from "../style/theme";

const STORAGE_THEME_KEY = "cryptoscreen-theme";
const themeStorage = {
  get: () => localStorage.get(STORAGE_THEME_KEY),
  set: (value) => localStorage.set(STORAGE_THEME_KEY, value),
};

const ThemeContext = React.createContext({ theme: null, updateTheme: () => null });

const ThemeContextProvider = ({ children }) => {
  const [themeNb, setThemeNb] = useState(0);

  useEffect(() => {
    const savedTheme = themeStorage.get();
    if (savedTheme && savedTheme !== themeNb) {
      setThemeNb(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={() => {
        const newThemeNb = (themeNb + 1) % colorsScheme.length;
        themeStorage.set(newThemeNb);
        setThemeNb(newThemeNb);
      }}
    >
      <ThemeProvider theme={{ ...scales, colors: colorsScheme[themeNb] }}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeContextProvider };
