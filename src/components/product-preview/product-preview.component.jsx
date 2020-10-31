import React from "react";
import ProductCard from "../product-card/product-card.component";
import { ProductPrevieWrap } from "./product-preview.styles";

const ProducsPreviewComponent = ({ item,...rest }) => {
  return (
    <ProductPrevieWrap>
      <ProductCard
        urlImage={"data:image/png;base64," + item.imagen}
        ProductName={item.productName}
        id={item.id}
        price ={item.price}
        {...rest}
      />
    </ProductPrevieWrap>
  );
};

export default ProducsPreviewComponent;
