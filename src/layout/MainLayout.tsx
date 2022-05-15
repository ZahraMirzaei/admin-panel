import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import sidebarNav from "../config/sidebarNav";

import SidebarContext from "../store/sidebarContext";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  const sidebarCtx = useContext(SidebarContext);

  useEffect(() => {
    if (document.body.classList.contains("sidebar__open"))
      document.body.classList.remove("sidebar__open");
  }, []);

  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div
          className={`${classes.main__content} ${
            !sidebarCtx.isOpen ? classes.close_sidebar : ""
          } main_wrapper`}
        >
          <TopNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
