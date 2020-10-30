import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import {
  selectActionFailure,
  selectIsFetching
} from "../../redux/product/product.selector";
import ProductsComponent from "./products.component";
import WithSpinnerGet from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  actionFailure: selectActionFailure
});

const ProductWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinnerGet
)(ProductsComponent);

export default ProductWithSpinner;