import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductWithSpinner from "../../../components/product-preview/product-with-spinner";
import { fetchGetProdutcStart } from "../../../redux/product/product.action";
import { selectProductCollection } from "../../../redux/product/product.selector";

import {
  ProductsUpdateContainer,
  ProductsTitle,
} from "./products-update.styles";

const ProductsUpdatePage = ({ productsCollection, fetchGetProdutcStart }) => {
  useEffect(() => {
    fetchGetProdutcStart();
  }, [fetchGetProdutcStart]);

  return (
    <ProductsUpdateContainer>
      <ProductsTitle>Administración de Productos</ProductsTitle>
      <ProductWithSpinner collection={productsCollection} />
    </ProductsUpdateContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  productsCollection: selectProductCollection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetProdutcStart: () => dispatch(fetchGetProdutcStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsUpdatePage);
