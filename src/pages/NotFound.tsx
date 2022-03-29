import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/button/Button";
import { useTranslation } from "react-i18next";
import langContextObj from "../store/langContext";

function NotFound() {
  const { t } = useTranslation();
  const langCtx = useContext(langContextObj);
  return (
    <div
      className={`${
        langCtx.lang === "en"
          ? "notFound__container"
          : "notFound__container_rtl"
      }`}
    >
      <h2
        className={` notFound__title ${
          langCtx.lang === "fa" ? "notFound__title_rtl" : "notFound__title_ltr"
        }`}
      >
        {t("notFoundMsg")}
      </h2>
      <Link to="/">
        <Button>{t("backToHome")}</Button>
      </Link>
      <div className="notFound__img">
        <img
          src={
            require("../assets/images/Oops 404 Error with a broken robot-cuate.svg")
              .default
          }
          alt="404 page"
        />
      </div>
    </div>
  );
}

export default NotFound;
