import React from "react";
import SpinnerComponent from "../spinner/spinner.component";


const WithSpinnerGet = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return !isLoading ? (
    <SpinnerComponent />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinnerGet;
