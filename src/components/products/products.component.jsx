import React from "react";
import ProducsPreviewComponent from "../product-preview/product-preview.component";
import { ProducstWrap, PaginationWrap } from "./products.styles";

import CategoryButton from "../category-button/category-button.component";
import { Pagination } from "@material-ui/lab";

const ProductsComponent = ({ collection }) => {
  return (
    <ProducstWrap>
      <CategoryButton />
      {collection.map((p) => (
        <ProducsPreviewComponent key={p.id} item={p} />
      ))}
      <PaginationWrap>
        <Pagination count={10} variant="outlined" />
      </PaginationWrap>
    </ProducstWrap>
  );
};

export default ProductsComponent;
