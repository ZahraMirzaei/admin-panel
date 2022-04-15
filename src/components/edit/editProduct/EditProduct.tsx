import React from "react";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IProductsTable as Props } from "../../../interfaces/Itable";
import classes from "./EditProduct.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
const EditProduct: React.FC<{ product?: Props }> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={classes.edit__container}>
      <div className={classes.edit__left}>
        <Card>
          <div className={classes.img_wrapper}>
            <img
              className={classes.pic}
              src={props.product?.pic}
              alt="product pic"
            />
          </div>
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

      <div className={classes.edit__right}>
        <Card>
          <div className={classes.product__edit}>
            <h3 className={classes.subTitle}>
              <Icon icon="fluent:edit-16-regular" width="24" />
              {t("edit")}
            </h3>
            <div className={classes.img_wrapper}>
              <div className={classes.upload_icon}>
                <Icon icon="akar-icons:cloud-upload" />
              </div>
              <div className={classes.file_input_control}>
                <input
                  className={classes.file_input}
                  type="file"
                  id="pic"
                  name="pic"
                  accept="image/png, image/jpeg"
                />
              </div>
              <img
                className={classes.pic}
                src={props.product?.pic}
                alt="product pic"
              />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                id="proName"
                type="text"
                placeholder={props.product?.product}
              />
              <Input
                id="category"
                type="text"
                placeholder={props.product?.category}
              />
              <Input
                id="price"
                type="text"
                placeholder={props.product?.price}
              />
              <Input
                id="inventoryCount"
                type="number"
                placeholder={props.product?.inventory.toString()}
              />
              <div className={classes.btn__wrapper}>
                <Link to="/products">
                  <Button type="submit">{t("upload")}</Button>
                </Link>
                <Link to="/products">
                  <Button outline={true}>{t("cancel")}</Button>
                </Link>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditProduct;
