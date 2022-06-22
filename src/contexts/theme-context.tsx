import { createContext, useContext, useState, useEffect } from "react";
import { UseDarkContext } from "../interfaces";

const ThemeContext = createContext({} as any);

const useTheme: UseDarkContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const setThemeLight = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
  };

  const setThemeDark = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  };

  const toggleDarkMode = () => {
    theme === "light" ? setThemeDark() : setThemeLight();
  };

  useEffect(() => {
    theme === null && setThemeLight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
