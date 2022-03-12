import React from "react";
import { Icon } from "@iconify/react";

import classes from "./SearchBox.module.scss";

function SearchBox() {
  return (
    <div className={classes.searchBox}>
      <Icon
        icon="fluent:search-28-filled"
        color="gray"
        width="14"
        style={{ fontWeight: "bold" }}
      />
      <input
        type="search"
        placeholder="Search"
        name="search"
        className={classes.searchBox_input}
      />
    </div>
  );
}

export default SearchBox;
