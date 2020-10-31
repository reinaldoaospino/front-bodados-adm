import React from "react";
import { connect } from "react-redux";
import EditProductComponent from "../../../components/edit-product/edit-product.component";
import { selectProductById } from "../../../redux/product/product.selector";
import { EditContainerPage } from "./editar.styles";

const EditarProductPage = ({ product }) => {
  return (
    <EditContainerPage>
      <EditProductComponent product={product} />
    </EditContainerPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(ownProps.match.params.productId)(state),
});

export default connect(mapStateToProps)(EditarProductPage);
