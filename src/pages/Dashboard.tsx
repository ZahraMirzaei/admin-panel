import React from "react";
import { useTranslation } from "react-i18next";
import Summary from "../components/summary/Summary";
import SaleChart from "../components/chart/Chart";
import DashboardTables from "../components/tables/DashboardTables";

function Dashboard() {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>
      <Summary />
      <SaleChart />
      <DashboardTables />
    </section>
  );
}

export default Dashboard;
