import React from "react";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IProductsTable } from "../../../interfaces/Itable";
import classes from "./EditProduct.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
const EditProduct: React.FC<{ product?: IProductsTable }> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={classes.edit__container}>
      <div className={classes.edit__left}>
        <Card>
          <div className={classes.product__info}>
            <div>
              <div className={classes.title}>{t("proName")}</div>
              <div className={classes.value}>
                {t(`${props.product?.product}`)}
              </div>
            </div>
            <div>
              <div className={classes.title}>{t("category")}</div>
              <div className={classes.value}>
                {t(`${props.product?.category}`)}
              </div>
            </div>
            <div>
              <div className={classes.title}>{t("price")}</div>
              <div className={classes.value}>
                {t(`${props.product?.price}`)}
              </div>
            </div>
            <div>
              <div className={classes.title}>{t("inventoryCount")}</div>
              <div className={classes.value}>
                {t(`${props.product?.inventory}`)}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditProduct;
