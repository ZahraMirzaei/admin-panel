import React from "react";
import classes from "./Card.module.scss";
const Card: React.FC = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
