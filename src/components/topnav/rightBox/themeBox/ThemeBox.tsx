import React, { useContext } from "react";
import ThemeContext from "../../../../store/themeContext";
import classes from "./ThemeBox.module.scss";

function ThemeBox() {
  // const [theme, setTheme] = useState("light");
  const themeCtx = useContext(ThemeContext);
  let theme = themeCtx.theme;
  return (
    <div className={classes.themeBox} onClick={() => themeCtx.toggleTheme()}>
      <div
        className={`${classes.toggle} ${
          theme === "dark" ? classes.darkMode : ""
        }`}
      ></div>
    </div>
  );
}

export default ThemeBox;
