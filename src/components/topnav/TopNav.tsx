import React from "react";
import { Icon } from "@iconify/react";
import SearchBox from "./searchBox/SearchBox";
import TopNavRightBox from "./rightBox/TopNavRightBox";

import classes from "./TopNav.module.scss";

function TopNav() {
  return (
    <div className={classes.topNav}>
      <div className={classes.topNav_left}>
        <Icon icon="ci:menu-alt-03" color="#424750" width="24" />
        <SearchBox />
      </div>
    </div>
  );
}

export default TopNav;
