import React from "react";
import SpinnerComponent from "../spinner/spinner.component";
import ErorrMessageComponent from "../error-message/error-message.component";

const WithSpinnerGet = (WrappedComponent) => ({
  isLoading,
  actionFailure,
  ...otherProps
}) => {
  const WithError = WithErrorMessage(WrappedComponent);
  return isLoading ? (
    <SpinnerComponent />
  ) : (
    <WithError error={actionFailure} {...otherProps} />
  );
};
 
const WithErrorMessage = (Compoenent) => ({ error, ...otherProps }) => {
  return (
    <div>
      {error ? <ErorrMessageComponent /> : <Compoenent {...otherProps} />}
    </div>
  );
};

export default WithSpinnerGet;
