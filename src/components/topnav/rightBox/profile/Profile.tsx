import React, { useContext, useEffect } from "react";
import { images } from "../../../../constants";
import classes from "./Profile.module.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../../../locale";
import LangContext from "../../../../store/langContext";

function Profile() {
  const languageCtx = useContext(LangContext);
  const { t } = useTranslation();

  const language = languageCtx.lang;

  useEffect(() => {
    i18n.changeLanguage(language!);
  }, [language]);

  return (
    <div className={classes.profile}>
      <div className={classes.profile__avatar}>
        <img src={images.avt} alt="avatar" />
      </div>
      <div className={classes.profile__info}>
        <p className={classes.profile__userName}>{t("zahraMirzaei")}</p>
        <span className={classes.profile__role}>{t("admin")}</span>
      </div>
    </div>
  );
}

export default Profile;
