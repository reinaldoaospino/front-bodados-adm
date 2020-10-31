import React from "react";
import CreateProductsComponent from "../../../components/create-products/create-products.component";
import { CreateContainerPage } from "./products-create.styles";

const ProductsCreatePage = () => {
  return (
    <CreateContainerPage>
      <CreateProductsComponent />
    </CreateContainerPage>
  );
};


export default ProductsCreatePage;
