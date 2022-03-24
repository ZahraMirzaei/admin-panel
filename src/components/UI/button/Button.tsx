import React from "react";

import classes from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  outline?: boolean;
}
const Button: React.FC<IButton> = (props) => {
  return (
    <button
      className={`${classes.btn} ${
        props.outline ? classes.outline : classes.button
      } `}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
