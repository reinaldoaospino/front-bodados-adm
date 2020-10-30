import React from "react";
import { AppContainer } from "../../App.styles";
import { ErrorMessage } from "./error-message.styles";

const ErorrMessageComponent = () => (
  <AppContainer>
    <ErrorMessage>
      Hubo un error en obtener los productos, intente más tarde
    </ErrorMessage>
  </AppContainer>
);

export default ErorrMessageComponent;
