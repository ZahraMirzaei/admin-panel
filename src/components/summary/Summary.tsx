import React from "react";

import SummaryBox from "./SummaryBox";
import { useTranslation } from "react-i18next";
import classes from "./Summary.module.scss";
import { IsummData } from "../../interfaces/IsummData";

const summaryData: IsummData[] = [
  {
    icon: "akar-icons:shopping-bag",
    text: "thisMonthSales",
    amount: "salesAmount",
    currency: "currency",
  },
  {
    icon: "icon-park-outline:transaction-order",
    text: "thisMonthOrders",
    amount: "orderAmount",
    currency: "",
  },
  {
    icon: "jam:coin",
    text: "thisMonthRevenue",
    amount: "revenueAmount",
    currency: "currency",
  },
];

function Summary() {
  const { t } = useTranslation();
  return (
    <section className={classes.summary}>
      <p className="subTitle">{t("summary")}</p>
      <div className={classes.summary__box}>
        {summaryData.map((item) => (
          <SummaryBox key={item.text} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Summary;
