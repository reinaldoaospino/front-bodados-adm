import React from "react";
import ProducsPreviewComponent from "../product-preview/product-preview.component";
import { ProducstWrap } from "./products.styles";

const ProductsComponent = ({ collection }) => {
  return (
    <ProducstWrap>
      {collection.map((p) => (
        <ProducsPreviewComponent item={p} />
      ))}
    </ProducstWrap>
  );
};

export default ProductsComponent;
