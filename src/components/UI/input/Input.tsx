import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./Input.module.scss";

interface Props {
  id: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  classes?: string;
  value?: string;
}
const Input: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`${classes.form__control} ${props.classes}`}>
      <label htmlFor={props.id}>{t(`${props.id}`)}</label>
      <input
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
