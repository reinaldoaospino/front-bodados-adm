import React from "react";
import { CircularProgress } from "@material-ui/core";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const SpinnerComponent = () => {
  return (
    <SpinnerContainer>
      <SpinnerOverlay>
        <CircularProgress />
      </SpinnerOverlay>
    </SpinnerContainer>
  );
};

export default SpinnerComponent;
