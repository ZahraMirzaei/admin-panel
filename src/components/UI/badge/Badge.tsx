import React from "react";
import { useTranslation } from "react-i18next";

type TBadge = {
  //   type: string;
  content: string;
};
const Badge: React.FC<TBadge> = (props) => {
  const { t } = useTranslation();
  return <span className={`status ${props.content}`}>{t(props.content)}</span>;
};

export default Badge;
