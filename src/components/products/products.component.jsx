import React from "react";
import ProducsPreviewComponent from "../product-preview/product-preview.component";
import { ProducstWrap, PaginationWrap } from "./products.styles";
import CategoryButton from "../category-button/category-button.component";
import { Pagination } from "@material-ui/lab";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


const ProductsComponent = ({
  productsCollection,
  categoriesCollection,
  categoryFilter,
  ...rest
}) => {

  if(categoryFilter){
    productsCollection.filter(p=>p.category === categoryFilter);
  }

  return (
    <div>
      <CategoryButton categoriesCollection={categoriesCollection} />
      <ProducstWrap>
        {productsCollection.map((p) => (
          <ProducsPreviewComponent key={p.id} item={p} {...rest} />
        ))}
      </ProducstWrap>
      <PaginationWrap>
        <Pagination count={10} variant="outlined" />
      </PaginationWrap>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryFilter: selectCategoryFilter
})

export default connect(mapStateToProps)(ProductsComponent);
