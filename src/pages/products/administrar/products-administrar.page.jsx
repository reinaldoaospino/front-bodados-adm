import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductWithSpinner from "../../../components/products/product-with-spinner";
import { fetchGetProdutcStart } from "../../../redux/product/product.action";
import { selectProductCollection } from "../../../redux/product/product.selector";
import {
  ProductsUpdateContainer,
  ProductsTitle,
} from "./products-administrar.styles";

const ProductsAdministrarPage = ({ productsCollection, fetchGetProdutcStart,...rest }) => {
  useEffect(() => {
    fetchGetProdutcStart();
  }, [fetchGetProdutcStart]);


  return (
    <ProductsUpdateContainer>
      <ProductsTitle>Administración de Productos</ProductsTitle>
      <ProductWithSpinner collection={productsCollection} {...rest} />
    </ProductsUpdateContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  productsCollection: selectProductCollection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetProdutcStart: () => dispatch(fetchGetProdutcStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdministrarPage);
