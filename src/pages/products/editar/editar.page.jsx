import React from "react";
import { connect } from "react-redux";
import { AppContainer } from "../../../App.styles";
import EditProductComponent from "../../../components/edit-product/edit-product.component";
import { selectProductById } from "../../../redux/product/product.selector";

const EditarProductPage = ({ product }) => {
  return (
    <AppContainer>
      <EditProductComponent product={product} />
    </AppContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(ownProps.match.params.productId)(state),
});

export default connect(mapStateToProps)(EditarProductPage);
