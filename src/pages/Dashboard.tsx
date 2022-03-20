import React from "react";
import { useTranslation } from "react-i18next";
import Summary from "../components/summary/Summary";
import SaleChart from "../components/chart/Chart";
import Table from "../components/tables/Table";

function Dashboard() {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>
      <Summary />
      <SaleChart />
      <Table />
    </section>
  );
}

export default Dashboard;
