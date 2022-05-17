const { createContext, useContext, useState, useEffect } = require("react");

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
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
