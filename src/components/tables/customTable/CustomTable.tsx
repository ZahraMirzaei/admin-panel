import React, { useState } from "react";
import { Itable } from "../../../interfaces/Itable";
import Card from "../../UI/card/Card";
import { useTranslation } from "react-i18next";
import classes from "./CustomTable.module.scss";

const CustomTable: React.FC<Itable> = (props) => {
  const { t } = useTranslation();
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

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
            {props.bodyData && props.renderBody ? (
              <tbody>
                {dataShow.map((item, index) => props.renderBody(item, index))}
              </tbody>
            ) : null}
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CustomTable;
