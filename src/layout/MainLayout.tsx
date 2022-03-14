import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import sidebarNav from "../config/sidebarNav";

import SidebarContext from "../store/sidebarContext";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  const sidebarCtx = useContext(SidebarContext);
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div
          className={`${classes.main__content} ${
            !sidebarCtx.isOpen && classes.close_sidebar
          }`}
        >
          <TopNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
