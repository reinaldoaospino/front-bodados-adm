import React from "react";
import SpinnerComponent from "../spinner/spinner.component";
import ErorrMessageComponent from "../error-message/error-message.component";

const WithSpinnerGet = (WrappedComponent) => ({
  isLoading,
  actionSuccess,
  ...otherProps
}) => {
  const WithError = WithErrorMessage(WrappedComponent);
  return isLoading ? (
    <SpinnerComponent />
  ) : (
    <WithError success={actionSuccess} {...otherProps} />
  );
};
 
const WithErrorMessage = (Compoenent) => ({ success, ...otherProps }) => {
  return (
    <div>
      {!success ? <ErorrMessageComponent /> : <Compoenent {...otherProps} />}
    </div>
  );
};

export default WithSpinnerGet;
