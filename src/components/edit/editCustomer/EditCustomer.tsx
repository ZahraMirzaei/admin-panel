import React from "react";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classes from "./EditCustomer.module.scss";
import { IcustomersTable } from "../../../interfaces/Itable";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";

const EditCustomer: React.FC<{ customer?: IcustomersTable }> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={classes.edit__container}>
      <div className={classes.edit__left}>
        <Card>
          <div className={classes.account}>
            <div className={classes.img_wrapper}>
              <img
                className={classes.avatar}
                src={props.customer?.avatar}
                alt="customer avatar"
              />
            </div>
            <div className={classes.account__info}>
              <p>{t("AccountDetails")}</p>
              <div className={classes.account__info__userName}>
                <Icon icon="majesticons:user-line" width="24" />
                <div>{props.customer?.userName}</div>
              </div>
            </div>
            <div className={classes.account__info}>
              <p>{t("contacts")}</p>
              <div className={classes.account__contact__phone}>
                <Icon icon="clarity:mobile-phone-solid" width="26" />
                <div>{props.customer?.phoneNumber}</div>
              </div>
              <div className={classes.account__contact__email}>
                <Icon icon="fontisto:email" width="24" />
                <div>{props.customer?.email}</div>
              </div>
              <div className={classes.account__contact__location}>
                <Icon icon="ep:map-location" width="28" />
                <div>{props.customer?.location}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className={classes.edit__right}>
        <Card>
          <div className={classes.account}>
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
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                />
              </div>
              <img
                className={classes.avatar}
                src={props.customer?.avatar}
                alt="customer avatar"
              />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                id="userName"
                type="text"
                placeholder={props.customer?.userName}
              />
              <Input
                id="phoneNumber"
                type="tel"
                minLength={7}
                maxLength={12}
                placeholder={props.customer?.phoneNumber}
              />
              <Input
                id="email"
                type="email"
                placeholder={props.customer?.email}
              />
              <Input
                id="address"
                type="text"
                minLength={10}
                placeholder={props.customer?.location}
              />
              <div className={classes.btn__wrapper}>
                <Link to="/customers">
                  <Button type="submit">{t("upload")}</Button>
                </Link>
                <Link to="/customers">
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

export default EditCustomer;
