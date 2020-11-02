import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinnerGet from "../with-spinner/with-spinner.component";
import {
  selectIsFetching,
  selectFetchingSuccess,
} from "../../redux/fetching/fetching.selector";
import CreateProductsComponent from "./create-products.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  actionSuccess: selectFetchingSuccess,
});

const CreateProductWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinnerGet
)(CreateProductsComponent);

export default CreateProductWithSpinner;
