import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div className={classes.main__content}>
          <TopNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
