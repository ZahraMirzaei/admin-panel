import React from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";
import EditCustomer from "../components/edit/editCustomer/EditCustomer";
import { IcustomersTable } from "../interfaces/Itable";
import { customers } from "../constants/tables";
import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";
const url =
  "https://admin-panel-79c71-default-rtdb.europe-west1.firebasedatabase.app/customers";
function CustomerEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { customerId } = params;

  /* fallback in case of time limit to test firebase database will over */
  let customerInfo: IcustomersTable = customers.filter(
    (item) => item.ID.toString() === customerId
  )[0];

  let customerEdit;

  const { data, error, status } = useFetch<IcustomersTable>(
    `${url}/${customerId}.json`
  );

  if (status === "loading") {
    customerEdit = <LoadingSpinner />;
  }

  if (error) {
    customerEdit = <EditCustomer customer={customerInfo} />;
  }

  if (status === "fetched" && data) {
    customerEdit = <EditCustomer customer={data} />;
  }

  return (
    <section>
      <h2 className="title">{t("editCustomer")}</h2>
      {customerEdit}
    </section>
  );
}

export default CustomerEdit;
