import React from "react";
import ThemeBox from "./themeBox/ThemeBox";
import LangBox from "./langBox/LangBox";

import classes from "./TopNavRightBox.module.scss";

function TopNavRightBox() {
  return (
    <div className={classes.topNavBox_right}>
      <LangBox />
      <ThemeBox />
    </div>
  );
}

export default TopNavRightBox;
