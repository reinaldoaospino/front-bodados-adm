import React from "react";
import ProducsPreviewComponent from "../product-preview/product-preview.component";
import { ProducstWrap, PaginationWrap } from "./products.styles";
import CategoryButton from "../category-button/category-button.component";
import { Pagination } from "@material-ui/lab";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategoryFilter } from "../../redux/category/category.selector";
import { useState } from "react";

const ProductsComponent = ({
  productsCollection,
  categoriesCollection,
  categoryFilter,
  ...rest
}) => {
  const [page, setPage] = useState(1);
  const [maxItem, setMaxItem] = useState(5);

  if (categoryFilter) {
    productsCollection =
      categoryFilter.toLowerCase() === "all"
        ? productsCollection
        : productsCollection.filter(
          (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
        );
  }

  const handlePaginationChange = (event, value) => {
    var max = page * maxItem;
    var min = max - maximo;
    productsCollection = productsCollection.slice(min,max);
    setPage(value);
  };

  return (
    <div>
      <CategoryButton categoriesCollection={categoriesCollection} />
      <ProducstWrap>
        {productsCollection.map((p) => (
          <ProducsPreviewComponent key={p.id} item={p} {...rest} />
        ))}
      </ProducstWrap>
      <PaginationWrap>
        <Pagination count={10} page={page} variant="outlined" onChange={handlePaginationChange} />
      </PaginationWrap>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryFilter: selectCategoryFilter,
});

export default connect(mapStateToProps)(ProductsComponent);
