import React from "react";
import { Itable, complex } from "../../../interfaces/Itable";
import Card from "../../UI/card/Card";
import Badge from "../../UI/badge/Badge";
import { useTranslation } from "react-i18next";
import classes from "./CustomTable.module.scss";

const CustomTable: React.FC<Itable> = (props) => {
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
    }
  }

  const { t } = useTranslation();

  return (
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
  );
};

export default CustomTable;
