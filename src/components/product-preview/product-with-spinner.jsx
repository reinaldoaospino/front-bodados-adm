import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsFetching } from "../../redux/product/product.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import ProductsComponent from "../products/products.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const ProductWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductsComponent);


export default ProductWithSpinner;
