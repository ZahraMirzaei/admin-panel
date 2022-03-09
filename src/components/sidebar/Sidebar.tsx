import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../../constants";
import sidebarNav from "../../config/sidebarNav";
import { Icon } from "@iconify/react";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__logo}>
        <img src={images.logo} alt="digikala" />
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item ${
              activeIndex === index && "active"
            }`}
          >
            <div className={classes.sidebar__menu__item__icon}>
              <Icon icon={nav.icon} />
            </div>
            <div className="sidebar__menu__item__txt">{nav.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
