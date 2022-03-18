import React from "react";

type TBadge = {
  //   type: string;
  content: string;
};
const Badge: React.FC<TBadge> = (props) => {
  return <span className={`status ${props.content}`}>{props.content}</span>;
};

export default Badge;
