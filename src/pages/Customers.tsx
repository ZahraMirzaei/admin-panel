import React from "react";
import { useTranslation } from "react-i18next";
import { useFetch } from "usehooks-ts";
import CustomTable from "../components/tables/customTable/CustomTable";
import { IcustomersTable } from "../interfaces/Itable";
import { customers, customersHeader } from "../constants/tabels";
const url =
  "https://admin-panel-79c71-default-rtdb.europe-west1.firebasedatabase.app/customers.json";
function Customers() {
  const { t } = useTranslation();
  const { data, error } = useFetch<IcustomersTable[]>(url);
  console.log(data);
  if (error) {
    return <p>error</p>;
  }
  return (
    <section>
      <h2 className="title">{t("customers")}</h2>
      <CustomTable
        limit={10}
        headData={customersHeader}
        bodyData={customers}
      ></CustomTable>
    </section>
  );
}

export default Customers;
