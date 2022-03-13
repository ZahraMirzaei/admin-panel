import React, { useState } from "react";
import classes from "./ThemeBox.module.scss";

function ThemeBox() {
  const [theme, setTheme] = useState("light");

  const themeChangeHandler = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };
  return (
    <div className={classes.themeBox} onClick={themeChangeHandler}>
      <div
        className={`${classes.toggle} ${
          theme === "dark" ? classes.darkMode : ""
        }`}
      ></div>
    </div>
  );
}

export default ThemeBox;
