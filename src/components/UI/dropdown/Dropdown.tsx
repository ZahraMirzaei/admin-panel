import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./Dropdown.module.scss";

type TOptionItem = {
  label: string;
  value: string;
};

interface Props {
  dropdownData: TOptionItem[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Dropdown: React.FC<Props> = (props) => {
  //   const selectRef = useRef<HTMLSelectElement | null>(null);

  const { t } = useTranslation();

  return (
    <div className={` subTitle ${classes.form__control}`}>
      <label htmlFor="category">{t("category")}</label>
      <select
        name="category"
        className={classes.select}
        id="category"
        onChange={props.onChange}
      >
        {props.dropdownData.map((item, index) => (
          <option key={`${item.label + index}`} value={item.value}>
            {t(`${item.label}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
