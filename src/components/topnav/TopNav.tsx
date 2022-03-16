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
          <Icon icon="ci:menu-alt-03" width="24" />
        </div>
        <div className={classes.search_desktop_wrapper}>
          <SearchBox />
        </div>
      </div>
      <TopNavRightBox />
      <br />
      <div className={classes.search_tablet_wrapper}>
        <SearchBox />
      </div>
    </div>
  );
}

export default TopNav;
