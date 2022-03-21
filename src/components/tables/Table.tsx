import React, {useCallback} from "react";
import { Link } from "react-router-dom";
import classes from "./Table.module.scss";
import { useTranslation } from "react-i18next";
import CustomTable from "./customTable/CustomTable";
import Badge from "../UI/badge/Badge";
import data from "../../constants/data";
import { TtopCustomers, TlatestTransactions } from "../../interfaces/Itable";

const Table = () => {
  const renderCusomerBody = useCallback((item: TtopCustomers, index: number) => (
    <tr key={index}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  ),[]);
  const renderOrderBody = useCallback((item: TlatestTransactions, index: number) => (
    <tr key={index}>
      <td>{item.orderId}</td>
      <td>{item.customer}</td>
      <td>{item.totalPrice}</td>
      <td>{item.date}</td>
      <td>
        <Badge content={item.status} />
      </td>
    </tr>
  ),[]);
  const { t } = useTranslation();
  if ("username" in )
    return (
      <section className={classes.table}>
        <div className={classes.table__top__customers}>
          <div className={classes.table__title}>
            <p className="subTitle">{t("topCustomers")}</p>
            <Link to="/">{t("viewAll")}</Link>
          </div>
          {
            <CustomTable
              headData={data.topCustomers.head}
              bodyData={data.topCustomers.body}
              renderBody={renderCusomerBody}
            />
          }
        </div>
        <div className={classes.table__top__customers}>
          <div className={classes.table__title}>
            <p className="subTitle">{t("topCustomers")}</p>
            <Link to="/">{t("viewAll")}</Link>
          </div>
          <CustomTable
            headData={data.topCustomers.head}
            bodyData={data.topCustomers.body}
            renderBody={renderCusomerBody}
          />
        </div>
      </section>
    );
};

export default Table;
