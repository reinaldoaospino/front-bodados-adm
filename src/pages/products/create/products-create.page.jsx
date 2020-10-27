import React from "react";
import { AppContainer } from "../../../App.styles";
import ProductCreateWithSpinner from "../../../components/create-products/create-products-with-spinner";

const ProductsCreatePage = () => {
  return (
    <AppContainer>
      <ProductCreateWithSpinner />
    </AppContainer>
  );
};


export default ProductsCreatePage;
