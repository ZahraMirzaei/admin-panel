import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hook/useFetch";
import CustomTable from "../components/tables/customTable/CustomTable";
import { IProductsTable } from "../interfaces/Itable";
import { products, productsHeader } from "../constants/tables";
import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";
import Dropdown from "../components/UI/dropdown/Dropdown";

const url =
  "https://admin-panel-79c71-default-rtdb.europe-west1.firebasedatabase.app/products.json";

const dropdownOptions = [
  { label: "all", value: "all" },
  { label: "digital", value: "digital" },
  { label: "clothing", value: "clothing" },
  { label: "beauty", value: "beauty" },
];
function Products() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(dropdownOptions[0].value);
  const { data, error, status } = useFetch<IProductsTable[]>(url);
  let productsTable;
  let tableData: IProductsTable[] | undefined;

  function selectedChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(() => e.target.value);
  }

  if (status === "loading") {
    productsTable = <LoadingSpinner />;
  }

  if (error) {
    //if fetch has error:
    //select data from local file ("../constants/tables.ts")
    switch (selected) {
      case "digital":
        tableData = products?.filter((item) => item.category === selected);
        break;
      case "clothing":
        tableData = products?.filter((item) => item.category === selected);
        break;
      case "beauty":
        tableData = products?.filter((item) => item.category === selected);
        break;
      default:
        tableData = products;
    }

    productsTable = (
      <CustomTable headData={productsHeader} bodyData={tableData} limit={10} />
    );
  }

  if (status === "fetched" && data) {
    switch (selected) {
      case "digital":
        tableData = data?.filter((item) => item.category === selected);
        break;
      case "clothing":
        tableData = data?.filter((item) => item.category === selected);
        break;
      case "beauty":
        tableData = data?.filter((item) => item.category === selected);
        break;
      default:
        tableData = data;
    }

    productsTable = (
      <CustomTable
        selectedCategory={selected}
        headData={productsHeader}
        bodyData={tableData}
        limit={10}
      />
    );
  }

  return (
    <section>
      <h2 className="title">{t("products")}</h2>
      {/* <Dropdown
        dropdownData={dropdownOptions}
        onChange={selectedChangeHandler}
      /> */}
      {productsTable}
    </section>
  );
}

export default Products;
