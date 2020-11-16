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
  const [maxItem, setMaxItem] = useState(12);

  if (categoryFilter) {
    productsCollection =
      categoryFilter.toLowerCase() === "all"
        ? productsCollection
        : productsCollection.filter(
            (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
          );
  }

  const [produtcsAux, setProdutcsAux] = useState(
    productsCollection.slice(0, maxItem)
  );

  const handlePaginationChange = (event, value) => {
    var max = value * maxItem;
    var min = max - maxItem;
    var sliceProducts = productsCollection.slice(min, max);

    setProdutcsAux(sliceProducts);
    setPage(value);
  };

  return (
    <div>
      <CategoryButton categoriesCollection={categoriesCollection} />
      <ProducstWrap>
        {produtcsAux.map((p) => (
          <ProducsPreviewComponent key={p.id} item={p} {...rest} />
        ))}
      </ProducstWrap>
      <PaginationWrap>
        <Pagination
          count={Math.ceil(productsCollection.length / 5) + 1}
          page={page}
          variant="outlined"
          onChange={handlePaginationChange}
        />
      </PaginationWrap>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryFilter: selectCategoryFilter,
});

export default connect(mapStateToProps)(ProductsComponent);
