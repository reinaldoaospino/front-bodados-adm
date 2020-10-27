import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CategoryButton from "../../../components/category-button/category-button.component";
import ProductWithSpinner from "../../../components/products/product-with-spinner";
import { fetchGetProdutcStart } from "../../../redux/product/product.action";
import { selectProductCollection } from "../../../redux/product/product.selector";
import Pagination from "@material-ui/lab/Pagination";

import {
  ProductsUpdateContainer,
  ProductsTitle,
  PaginationWrap,
} from "./products-update.styles";

const ProductsUpdatePage = ({ productsCollection, fetchGetProdutcStart }) => {
  useEffect(() => {
    fetchGetProdutcStart();
  }, [fetchGetProdutcStart]);

  return (
    <ProductsUpdateContainer>
      <ProductsTitle>Administración de Productos</ProductsTitle>
      <CategoryButton />
      <ProductWithSpinner collection={productsCollection} />
      <PaginationWrap>
        <Pagination count={10} variant="outlined" />
      </PaginationWrap>
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
