import React, { useContext, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import i18n from "../../../locale";
import LangContext from "../../../store/langContext";

import classes from "./SearchBox.module.scss";

function SearchBox() {
  const languageCtx = useContext(LangContext);
  const { t } = useTranslation();

  const language = languageCtx.lang;

  useEffect(() => {
    i18n.changeLanguage(language!);
  }, [language]);

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
        placeholder={t("search")}
        name="search"
        className={classes.searchBox_input}
      />
    </div>
  );
}

export default SearchBox;
