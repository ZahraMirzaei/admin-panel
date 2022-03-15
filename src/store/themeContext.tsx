import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type themeType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<themeType>({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  }

  const themeValue: themeType = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
