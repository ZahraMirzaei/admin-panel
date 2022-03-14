import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import SearchBox from "./searchBox/SearchBox";
import TopNavRightBox from "./rightBox/TopNavRightBox";
import SidebarContext from "../../store/sidebarContext";

import classes from "./TopNav.module.scss";

function TopNav() {
  const sideOpenCtx = useContext(SidebarContext);

  function clickHandler() {
    sideOpenCtx.toggleSidebar();
  }
  return (
    <div className={classes.topNav}>
      <div className={classes.topNav_left}>
        <div className={classes.topNav_left_menu_icon} onClick={clickHandler}>
          <Icon icon="ci:menu-alt-03" color="#424750" width="24" />
        </div>
        <SearchBox />
      </div>

      <div className={classes.topNav_right}>
        <TopNavRightBox />
      </div>
    </div>
  );
}

export default TopNav;
