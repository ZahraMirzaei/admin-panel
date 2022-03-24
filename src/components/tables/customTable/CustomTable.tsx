import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Itable, complex } from "../../../interfaces/Itable";
import Card from "../../UI/card/Card";
import Badge from "../../UI/badge/Badge";
import Modal from "../../UI/modal/Modal";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import classes from "./CustomTable.module.scss";

const CustomTable: React.FC<Itable> = (props) => {
  const [showModal, setShowModal] = useState(false);
  function showModalHandler() {
    setShowModal((prev) => !prev);
  }
  function tableBody(item: complex, index: number) {
    if ("username" in item) {
      return (
        <tr key={index}>
          <td>{item.username}</td>
          <td>{item.order}</td>
          <td>{item.price}</td>
        </tr>
      );
    } else if ("orderId" in item) {
      return (
        <tr key={index}>
          <td>{item.orderId}</td>
          <td>{item.customer}</td>
          <td>{item.totalPrice}</td>
          <td>{item.date}</td>
          <td>
            <Badge content={item.status} />
          </td>
        </tr>
      );
    } else if ("email" in item) {
      return (
        <tr key={index}>
          <td>{item.ID}</td>
          <td>{item.userName}</td>
          <td className="ltr">{item.email}</td>
          <td className="ltr">{item.phoneNumber}</td>
          <td>{item.totalOrders}</td>
          <td>{item.totalSpend}</td>
          <td>{item.location}</td>
          <td className={classes.actions}>
            <Icon icon="charm:menu-kebab" />
            <div className={classes.actions__box}>
              <div
                className={classes.actions__delete}
                onClick={showModalHandler}
              >
                <Icon icon="fluent:delete-24-regular" width="24" />
              </div>
              <div className={classes.actions__edit}>
                <Link to={`/customers/${item.ID}`}>
                  <Icon icon="fluent:edit-16-regular" width="24" />
                </Link>
              </div>
            </div>
          </td>
        </tr>
      );
    }
  }

  const { t } = useTranslation();

  return (
    <>
      {showModal ? (
        <Modal
          title={t("deleteCustomer")}
          message={`${t("modalMessage")}`}
          onConfirm={showModalHandler}
        />
      ) : null}
      <div className={classes.container}>
        <Card>
          <div className={classes.table__wrapper}>
            <table>
              {props.headData ? (
                <thead>
                  <tr>
                    {props.headData.map((item, index) => (
                      <th key={index}>{t(item)}</th>
                    ))}
                  </tr>
                </thead>
              ) : null}
              <tbody>
                {props.bodyData.map((item, index) => tableBody(item, index))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CustomTable;
