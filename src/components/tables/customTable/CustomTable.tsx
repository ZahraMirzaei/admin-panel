import React, { useState } from "react";
import { Itable } from "../../../interfaces/Itable";
import classes from "./CustomTable.module.scss";

const CustomTable: React.FC<Itable> = (props) => {
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  return (
    <div>
      <div className={classes.table__wrapper}>
        <table>
          {props.headData ? (
            <thead>
              <tr>
                {props.headData.map((item, index) => {
                  <th key={index}>{item}</th>;
                })}
              </tr>
            </thead>
          ) : null}
          {props.bodyData ? (
            <tbody>
              {dataShow.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((i, idx) => (
                    <td key={idx}>{i}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
