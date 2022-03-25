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
  let tableData: IProductsTable[] = products.filter(
    (item) => item.category === selected
  );
  useEffect(() => {
    if (data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      tableData = data.filter((item) => item.category === selected);
    } else if (error) {
      tableData = products.filter((item) => item.category === selected);
    }
  }, [selected, data]);

  function selectedChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(() => e.target.value);
    // console.log(selected, e.target.value);
  }

  if (status === "loading") {
    productsTable = <LoadingSpinner />;
  }

  if (error && selected === "all") {
    productsTable = (
      <CustomTable headData={productsHeader} bodyData={products} limit={10} />
    );
  } else if (error && selected !== "digital") {
    tableData = products.filter((item) => item.category === selected);
    productsTable = (
      <CustomTable headData={productsHeader} bodyData={tableData} limit={10} />
    );
  }

  if (status === "fetched" && data && selected === "all") {
    productsTable = (
      <CustomTable headData={productsHeader} bodyData={data} limit={10} />
    );
  } else if (status === "fetched" && data && selected !== "all") {
    // tableData = data.filter((item) => item.category === "digital");
    console.log(selected, tableData);

    productsTable = (
      <CustomTable headData={productsHeader} bodyData={tableData} limit={10} />
    );
  }

  // if (selected === "all") {
  //   productsTable = error ? (
  //     <CustomTable limit={10} headData={productsHeader} bodyData={products} />
  //   ) : status === "fetched" && data ? (
  //     <CustomTable limit={10} headData={productsHeader} bodyData={data} />
  //   ) : null;
  // }

  // if (selected !== "all") {
  //   tableData = error
  //     ? products.filter((item) => item.category === selected)
  //     : data?.filter((item) => item.category === selected);
  //   console.log(tableData);
  //   productsTable = (
  //     <CustomTable limit={10} headData={productsHeader} bodyData={tableData!} />
  //   );
  // }

  // if (selected === "all" && data) {
  //   productsTable = (
  //     <CustomTable limit={10} headData={productsHeader} bodyData={data} />
  //   );
  // } else {
  //   tableData = data?.filter((item) => item.category === selected);
  //   productsTable = (
  //     <CustomTable limit={10} headData={productsHeader} bodyData={tableData!} />
  //   );
  // }

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
