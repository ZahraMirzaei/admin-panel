import React from "react";
import classes from "./ThemeBox.module.scss";

function ThemeBox() {
  return (
    <div className={classes.themeBox}>
      <div className={classes.toggle}></div>
    </div>
  );
}

export default ThemeBox;
