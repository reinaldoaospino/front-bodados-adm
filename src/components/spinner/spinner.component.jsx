import React from "react";
import { CircularProgress } from "@material-ui/core";
import { SpinnerOverlay } from "./spinner.styles";

const SpinnerComponent = () => {
  return (
    <SpinnerOverlay>
      <CircularProgress />
    </SpinnerOverlay>
  );
};

export default SpinnerComponent;
