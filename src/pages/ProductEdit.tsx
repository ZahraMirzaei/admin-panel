import React from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";
import EditProduct from "../components/edit/editProduct/EditProduct";
import { IProductsTable } from "../interfaces/Itable";
import { products } from "../constants/tables";
import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";

const url =
  "https://admin-panel-79c71-default-rtdb.europe-west1.firebasedatabase.app/products";
function ProductEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { productId } = params;

  let productInfo: IProductsTable = products.filter(
    (item) => item.ID.toString() === productId
  )[0];

  let productEdit;

  const { data, error, status } = useFetch<IProductsTable>(
    `${url}/${productId}.json`
  );

  if (status === "loading") {
    productEdit = <LoadingSpinner />;
  }

  if (error) {
    productEdit = <EditProduct product={productInfo} />;
  }

  if (status === "fetched" && data) {
    productEdit = <EditProduct product={data} />;
  }

  return (
    <section>
      <h2 className="title">{t("editProduct")}</h2>
      {productEdit}
    </section>
  );
}

export default ProductEdit;
