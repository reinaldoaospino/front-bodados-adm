import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsFetching } from "../../redux/product/product.selector";

import CreateProductsComponent from "./create-products.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const ProductCreateWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(CreateProductsComponent);

export default ProductCreateWithSpinner;
