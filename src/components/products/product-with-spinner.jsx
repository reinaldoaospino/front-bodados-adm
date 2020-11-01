import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import {
  selectActionFailure,
  selectIsFetching
} from "../../redux/product/product.selector";
import ProductsComponent from "./products.component";
import WithSpinnerGet from "../with-spinner/with-spinner.component";
import { selectFetchingSuccess } from "../../redux/fetching/fetching.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  actionSuccess: selectFetchingSuccess
});

const ProductWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinnerGet
)(ProductsComponent);

export default ProductWithSpinner;