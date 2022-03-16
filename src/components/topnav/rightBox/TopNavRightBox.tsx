import React from "react";
import ThemeBox from "./themeBox/ThemeBox";
import LangBox from "./langBox/LangBox";
import Profile from "./profile/Profile";

import classes from "./TopNavRightBox.module.scss";

function TopNavRightBox() {
  return (
    <div className={classes.topNavBox_right}>
      <div className={classes.wrapper}>
        <LangBox />
        <ThemeBox />
      </div>
      <Profile />
    </div>
  );
}

export default TopNavRightBox;
